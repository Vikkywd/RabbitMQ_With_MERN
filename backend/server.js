const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const amqp = require('amqplib');
const cors = require('cors');

const app = express();

app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*'
    }
});

const connectUrl = `amqps://esstrisy:fgSDqs5Z87QMdOgCTQGzm6qF-kABs5EI@leopard.lmq.cloudamqp.com/esstrisy`;
const queue = 'temperature-stream';

const startRabitConsumer = async()=>{
    const conn = await amqp.connect(connectUrl);
    const channel = await conn.createChannel();
    await channel.assertQueue(queue, {durable: false});

    channel.consume(queue, (msg)=>{
        const data = JSON.parse(msg.content.toString());
        console.log('data: Received ==>> ', data);
        io.emit('temperature', data);       
    }, {noAck: true});
}
startRabitConsumer().catch(console.error('errr'))

server.listen(9000, ()=>console.log('server is started on 9000'))
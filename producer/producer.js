const amqp = require('amqplib');

const queue = 'temperature-stream';
const connectUrl = 'amqps://esstrisy:fgSF-kABs5EI@leopard.lmq.cloudamqp.com/esstrisy';


const startProducer = async () => {
    const conn = await amqp.connect(connectUrl);
    const channel = await conn.createChannel();
    await channel.assertQueue(queue, { durable: false });

    setInterval(() => {
        const data = {
            Temperature: (20 + Math.random() * 10).toFixed(2),
            timestamp: new Date().toISOString()
        };
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
        console.log(': send>>>>>>>', data);
    }, 1000)
}

startProducer().catch(console.error("errrr"))
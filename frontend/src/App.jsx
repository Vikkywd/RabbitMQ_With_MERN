import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const socket = io('http://localhost:9000');

const App = ()=>{
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('temperature', (newData) => {
      setData((prev) => [...prev.slice(-19), newData]);
    });
  }, []);
      return (
        <div style={{ padding: '2rem' }}>
      <h2>🌡️ Real-Time Temperature Chart</h2>
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" tickFormatter={str => str.slice(11, 19)} />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
      </LineChart>
    </div>
      )
}

export default App;
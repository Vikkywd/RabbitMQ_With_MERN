# RabbitMQ_with_MERN

This project demonstrates a simple message queue architecture using **RabbitMQ**, integrated with a **MERN stack** (MongoDB, Express, React, Node.js). It features:

- A **Producer** service (Node.js) to send messages.
- A **Backend** service (Node.js + Express) that receives messages and broadcasts them via **Socket.IO**.
- A **Frontend** (React + Vite) that listens for real-time messages and displays them like a chat.


## 🚀 Getting Started

### 1. Clone the repository
git clone https://github.com/your-username/RabbitMQ_with_MERN.git
cd RabbitMQ_with_MERN

Go into each folder and run:

npm install

Do this in:

Producer/

backend/

frontend/

Start each service

Producer

Navigate to the Producer folder and run:

node producer.js

Backend

Navigate to the backend folder and run:

npm start


Frontend (React with Vite)

Navigate to the frontend folder and run:

npm run dev



🔧 Requirements
Node.js
RabbitMQ server running locally or remotely
Vite (comes with the frontend)



💬 Features

Real-time communication with Socket.IO

Decoupled producer and consumer via RabbitMQ

Lightweight frontend with React + Vite

Simple chat-like UI to display messages



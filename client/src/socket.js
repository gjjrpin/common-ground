import { io } from "socket.io-client";

// This is taken from socket.io website. Link below.
const URL = process.env.SOCKET_URL || "http://localhost:3001";

// This connects to the url above.
// CONNECTING TO THE SOCKET PROTOCOL.
export const socket = io(URL);

// SOCKET.IO NOTES
// I USED THE LINK BELOW TO INSTALL SOCKET.IO TO MY CLIENT
// npm install socket.io-client <-- This allows us to communicate with our socket.
// https://socket.io/get-started/private-messaging-part-1/#client-initialization

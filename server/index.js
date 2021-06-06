const express = require('express');
const cors = require('cors');
const router = require('./router')

const app = express();
app.use(cors());
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
});

// Setup socket connection & disconnection
io.on('connection', (socket) => {
	console.log('New connection here!!!!!!!!!!!!');

	// disconnection
	socket.on('disconnect', () => {
		console.log('User had left');
	})
})

// Use route middleware / separate routers
app.use(router)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})
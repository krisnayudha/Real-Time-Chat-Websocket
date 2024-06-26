const socket = io();
  socket.on('connect', () => {
    console.log("connect to server")
  })

const messageInput = document.getElementById('input_pesan')
const sendMessageButton = document.getElementById('send_message')

socket.on('newMessage', (msg) => {
  const item = document.createElement('Li')
  console.log('message from server : ', msg)
  item.textContent = msg
  document.getElementById('message').appendChild(item)
})

sendMessageButton.addEventListener('click', () => {
  const message = messageInput.value.trim(); // Trim whitespace

  // Validate message (optional)
  if (!message) {
    console.warn('Please enter a message.');
    return; // Exit function if message is empty
  }

  // Emit the message to the server
  socket.emit('newMessage', message);

  // Clear the input field
  messageInput.value = '';
});

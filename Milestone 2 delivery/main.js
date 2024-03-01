function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var chatBox = document.getElementById('chatBox');

    if (messageInput.value.trim() !== '') {
        var message = document.createElement('div');
        message.className = 'message';
        message.textContent = messageInput.value;

        chatBox.appendChild(message);
        messageInput.value = '';

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

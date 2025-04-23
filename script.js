async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatLog = document.getElementById("chat-log");

  const message = input.value;
  chatLog.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
  input.value = "";

  const response = await fetch("https://YOUR_BACKEND_URL/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  chatLog.innerHTML += `<div><strong>AI:</strong> ${data.reply}</div>`;
  chatLog.scrollTop = chatLog.scrollHeight;
}

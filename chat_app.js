const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

function sendMessage(user, message, emitter) {
  emitter.emit("message", { user, message });
}

eventEmitter.on("message", (data) => {
  console.log(`${data.user}: ${data.message}`);
});

sendMessage("Alice", "Hello!", eventEmitter);
sendMessage("Bob", "Hello, Alice!", eventEmitter);
sendMessage("Charlie", "How are you?", eventEmitter);

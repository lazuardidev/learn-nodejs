const EventEmitter = require('events');

const BasicMath = {
  add: (a, b) => console.log(a + b),
  subtract: (a, b) => console.log(a - b),
};

// Tulis kodemu di bawah ini ...

// 1. Buat objek eventEmitter
const eventEmitter = new EventEmitter();

// 2. Tambahkan fungsi add dari BasicMath sebagai listener dari event calculate
eventEmitter.on('calculate', BasicMath.add);

// 3. Tambahkan fungsi subtract sebagai one-time listener dari event calculate
eventEmitter.once('calculate', BasicMath.subtract);

// 4. Bangkitkan event calculate dengan parameter angka 2 dan 3.
eventEmitter.emit('calculate', 2, 3);

// 5. Bangkitkan event calculate dengan parameter angka 5 dan 6.
eventEmitter.emit('calculate', 5, 6);
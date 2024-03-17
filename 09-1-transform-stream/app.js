/**
 * @TODO
 * Buatlah fungsi `createBase64TransformStream` yang mengonversi data yang masuk menjadi base64.
 */
const { Transform } = require("stream");

function createBase64TransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
      // Mengonversi data menjadi base64
      const base64Data = chunk.toString("base64");
      // Memanggil callback dengan data yang telah diubah menjadi base64
      callback(null, base64Data);
    },
  });
}

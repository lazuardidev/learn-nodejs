/**
 * @TODO
 * 1. Cetak jenis platform pada Terminal
 * 2. Hentikan proses dengan status code non-zero (selain 0)
 */

// Tulis jawaban di bawah ini
const os = require("os");

// Mendapatkan jenis platform
const platform = os.platform();
console.log(platform);

// Menghentikan proses dengan status code non-zero
process.exitCode = 1;

/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const fs = require("fs");

function readDirAndWriteFile() {
  // Tulis jawaban di bawah ini
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Mengurutkan nama folder secara ascending (A-Z)
    const sortedFolders = files
      .filter((file) => fs.lstatSync(file).isDirectory())
      .sort();

    // Menyusun nama folder menjadi format yang sesuai untuk penulisan ke file
    const folderNames = sortedFolders.join(",");

    // Menulis nama folder ke dalam file out.txt
    fs.writeFile("out.txt", folderNames, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log("Folders have been written to out.txt");
    });
  });
}

readDirAndWriteFile();

// javascript

var listMahasiswa = [
    // JSON -> object
    {
        "Nama":"Mazaya",
        "Kelas": "01",
        "NIM": "13320028"
    },
    {
        "Nama": "Deedat",
        "Kelas": "02",
        "NIM": "13320012"
    }
]

listMahasiswa.forEach(function(mahasiswa) {
    console.log("Nama saya " + mahasiswa["Nama"] +". Kelas saya " + mahasiswa["Kelas"]+".")
})
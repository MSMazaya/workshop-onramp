# python

listMahasiswa = [
    # dictionary
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

for mahasiswa in listMahasiswa:
    print(f"Nama saya {mahasiswa['Nama']}. Kelas saya {mahasiswa['Kelas']}.")
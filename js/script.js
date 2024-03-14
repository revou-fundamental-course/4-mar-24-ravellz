document.getElementById("hitung-bmi").addEventListener("click", hitungBMI);
document.getElementById("reset").addEventListener("click", reset);

function hitungBMI() {
  let jenisKelamin = document.forms["bmi-form"]["jenis-kelamin"];
  let beratBadan = document.forms["bmi-form"]["berat-badan"];
  let usia = document.forms["bmi-form"]["usia"];
  let tinggiBadan = document.forms["bmi-form"]["tinggi-badan"];
  if (
    jenisKelamin.value == "" ||
    beratBadan.value == "" ||
    usia.value == "" ||
    tinggiBadan.value == ""
  ) {
    alert("Mohon isi data diri dengan lengkap");
  } else {
    let hasil = beratBadan.value / (tinggiBadan.value / 100) ** 2;
    if (hasil < 18.5) {
      document.getElementById("deskripsi").innerHTML = "Kurang";
      document.getElementById("detail-deskripsi").innerHTML =
        "Anda memiliki berat badan yang kurang";
      document.getElementById("note-hasil").innerHTML = "dibawah 18.5";
    } else if (hasil < 25) {
      document.getElementById("deskripsi").innerHTML = "Ideal";
      document.getElementById("detail-deskripsi").innerHTML =
        "Anda memiliki berat badan yang ideal";
      document.getElementById("note-hasil").innerHTML = "diantara 18.5 - 24.9";
    } else if (hasil < 30) {
      document.getElementById("deskripsi").innerHTML = "Lebih";
      document.getElementById("detail-deskripsi").innerHTML =
        "Anda memiliki berat badan yang berlebih";
      document.getElementById("note-hasil").innerHTML = "diantara 25 - 29.9";
    } else if (hasil >= 30) {
      document.getElementById("deskripsi").innerHTML = "Kegemukan (Obesitas)";
      document.getElementById("detail-deskripsi").innerHTML =
        "Anda memiliki berat badan yang terlalu gemuk";
      document.getElementById("note-hasil").innerHTML = "diatas 30";
    } else {
      return false;
    }
    document.getElementById("score").innerHTML = hasil;
    console.log(hasil);
  }
}

function reset() {
  document.getElementById("bmi-form").reset();
}

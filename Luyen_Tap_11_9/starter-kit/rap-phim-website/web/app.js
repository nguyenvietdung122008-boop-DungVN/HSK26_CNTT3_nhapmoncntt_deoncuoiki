const danhSachPhong = [
  { ma: "P2D-01", ten: "Phong 2D Tieu chuan 1", gia: 75000 },
  { ma: "P2D-02", ten: "Phong 2D Tieu chuan 2", gia: 80000 },
  { ma: "P3D-01", ten: "Phong 3D Voi kinh", gia: 110000 },
  { ma: "VIP-01", ten: "Phong Gold Class VIP", gia: 180000 },
];

function hienThiBangGiaVe() {
  const bang = document.getElementById("bang-gia");
  for (const phong of danhSachPhong) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = phong.ma;
    dong.insertCell().textContent = phong.ten;
    dong.insertCell().textContent = phong.gia.toLocaleString("vi-VN");
  }
}

hienThiBangGia();

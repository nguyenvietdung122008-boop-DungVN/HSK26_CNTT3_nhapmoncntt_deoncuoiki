# ĐỀ LUYỆN TẬP ÔN THI HACKATHON 02 – MÃ ĐỀ 02

## 1. Quy định chung
- Làm bài cá nhân trên Windows hoặc macOS. Công cụ: File Explorer/Finder, PowerShell/Terminal, VS Code, trình duyệt Chrome hoặc Edge, Excel, GitHub (giao diện web).
- Giữ file `.env` trên máy; không mở nội dung để chụp ảnh và không upload lên GitHub.

## 2. Mục tiêu
Thực hành tổng hợp các kỹ năng của lập trình viên: quản lý file và thư mục, dùng giao diện CLI, lọc dữ liệu và viết script, viết tài liệu Markdown, bảo vệ thông tin bí mật, gỡ lỗi web bằng DevTools, báo cáo lỗi đúng chuẩn và xử lý dữ liệu bằng Excel.

## 3. Tài liệu

### 3.1. Bộ tài nguyên
```text
starter-kit/
├── bai_lam.md                        Mẫu ghi bài làm
└── Rap Phim Website FINAL/
    ├── .env                          File ẩn, dữ liệu bí mật giả lập
    ├── Bien Ban Ban Giao.txt
    ├── Ban Ve Thang 11.xlsx
    ├── Server.log
    ├── cache_991.tmp
    └── web/                          Trang web demo
        ├── index.html
        ├── style.css
        ├── app.js
        └── images/
            └── logo-cinebox.png
```

### 3.2. Workbook `Ban Ve Thang 11.xlsx`
- **Sheet `BangGia`**: Cột `A` (`ma_phong`), Cột `B` (`loai_phong`), Cột `C` (`gia_ve`).
- **Sheet `DatVe`**: Cột `A` (`ma_don`), Cột `B` (`ngay_mua`), Cột `C` (`ma_phong`), Cột `D` (`so_ve`), Cột `E` (`loai_phong`), Cột `F` (`gia_ve`), Cột `G` (`thanh_tien`).
- Dữ liệu đã chuẩn hoá: mã phòng hợp lệ, không có khoảng trắng thừa, không có dòng trống; cột `E`, `F`, `G` để trống để sinh viên làm công thức.

### 3.3. File `Server.log` và file `.env`
- Mỗi dòng log có dạng: ngày giờ, mức độ cảnh báo (`INFO`, `WARNING`, `ERROR`), phương thức, đường dẫn. Ví dụ: `2026-11-01 09:01:12 INFO GET /lich-chieu`
- Từ khoá mức độ log cần lọc ghi đúng dạng chữ in hoa `ERROR` hoặc `WARNING`.
- File `.env` chứa 3 biến: `DB_HOST`, `DB_SECRET`, `TICKET_API_KEY` (không cần mở file để biết tên biến).

### 3.4. Khung script `tong_hop` (dùng cho Mục 4.4)

**Windows (PowerShell) – file `tong_hop.ps1`:**
```powershell
# Script: tong_hop.ps1
# Tac gia: HOAN_THIEN
# Ngay tao: HOAN_THIEN
Write-Host "Dang tao bao cao..."
"=== BAO CAO SU CO WEBSITE ===" > HOAN_THIEN
Get-Content HOAN_THIEN | Select-String "HOAN_THIEN" >> HOAN_THIEN
Get-Content HOAN_THIEN | Select-String "HOAN_THIEN" | Measure-Object >> HOAN_THIEN
Write-Host "Hoan thanh!"
```

**macOS (Terminal) – file `tong_hop.sh`:**
```bash
# Script: tong_hop.sh
# Tac gia: HOAN_THIEN
# Ngay tao: HOAN_THIEN
echo "Dang tao bao cao..."
echo "=== BAO CAO SU CO WEBSITE ===" > HOAN_THIEN
cat HOAN_THIEN | grep "HOAN_THIEN" >> HOAN_THIEN
cat HOAN_THIEN | grep "HOAN_THIEN" | wc -l >> HOAN_THIEN
echo "Hoan thanh!"
```

---

## 4. Yêu cầu nghiệp vụ
Lệnh và kết quả ghi vào `bai_lam.md` theo đúng mục trong mẫu.

### 4.1. Tổ chức thư mục bằng GUI
- Bật hiển thị đuôi file và file ẩn trong File Explorer/Finder.
- Đổi tên thư mục gốc `Rap Phim Website FINAL` thành `rap-phim-website`.
- Tạo 4 thư mục trong thư mục gốc: `docs`, `data`, `logs`, `evidence`.
- Đổi tên đúng 3 file `Bien Ban Ban Giao.txt`, `Ban Ve Thang 11.xlsx`, `Server.log` theo dạng `snake_case` (`bien_ban_ban_giao.txt`, `ban_ve_thang_11.xlsx`, `server.log`).
- Dùng GUI chuyển `ban_ve_thang_11.xlsx` vào `data`, `server.log` vào `logs`. Giữ `bien_ban_ban_giao.txt` và `cache_991.tmp` tại thư mục gốc để làm Mục 4.2.
- Sao chép mẫu `bai_lam.md` vào thư mục gốc `rap-phim-website`. Từ đây ghi bài vào file `bai_lam.md` trong thư mục gốc `rap-phim-website` (bản vừa sao chép), không ghi vào file trong `starter-kit`.
- Giữ `.env` ở thư mục gốc. Không đổi tên thư mục `web` và các file bên trong.

### 4.2. Thao tác máy tính cơ bản bằng CLI
Mở PowerShell (Windows) hoặc Terminal (macOS) tại thư mục gốc `rap-phim-website` và dùng các lệnh CLI để:
- Hiển thị đường dẫn tuyệt đối của thư mục hiện tại.
- Liệt kê nội dung, gồm cả file ẩn.
- Di chuyển file `bien_ban_ban_giao.txt` vào `docs`.
- Tạo thư mục `backup` trong thư mục gốc.
- Sao chép `data/ban_ve_thang_11.xlsx` vào `backup`.
- Xoá file `.tmp` (`cache_991.tmp`) tại thư mục gốc; không xoá file khác.
- Dùng đường dẫn tương đối vào `logs`, liệt kê nội dung rồi quay lại thư mục gốc.
- Ghi các lệnh đã chạy vào mục 4.2 của `bai_lam.md` và dán kết quả của một lần liệt kê toàn bộ dự án kể cả file ẩn ở cuối phần này, không cần dán kết quả từng lệnh.

### 4.3. Lọc log truy cập website
Tại thư mục gốc `rap-phim-website`, chỉ dùng lệnh CLI (không gõ tay nội dung vào file):
- **a)** Lọc các dòng chứa `ERROR` trong `logs/server.log`, ghi kết quả vào `logs/loi_error.txt`. Ghi lệnh và dán 2 dòng đầu tiên của file vào `bai_lam.md`.
- **b)** Đếm số dòng chứa `WARNING` trong `logs/server.log` bằng pipeline (dấu `|`). Ghi lệnh và kết quả đếm.

### 4.4. Hoàn thiện script tạo báo cáo tổng hợp
- Tạo file script tại thư mục gốc `rap-phim-website` từ khung ở Mục 3.4, hoàn thiện các vị trí `HOAN_THIEN`. Ghi tên tác giả và ngày tạo.
- Script tạo file `logs/tong_hop.txt` có nội dung theo đúng thứ tự: dòng đầu tiên `=== BAO CAO SU CO WEBSITE ===`; tiếp theo là các dòng chứa `WARNING`; cuối cùng là số dòng chứa `ERROR`.
- Dùng đường dẫn tương đối: đọc `logs/server.log`, ghi vào `logs/tong_hop.txt`. Tự xác định mỗi vị trí `HOAN_THIEN` cần điền file hay từ khoá nào.
- Chạy script từ thư mục gốc, ghi lệnh chạy và dán nội dung `logs/tong_hop.txt` vào mục 4.4 của `bai_lam.md`. Nếu máy chặn chạy script, xem Phụ lục 2.

### 4.5. README.md và bảo vệ thông tin bí mật
Tạo `README.md` ở thư mục gốc dự án với nội dung cho sẵn dưới đây; chỉ cần định dạng đúng cú pháp Markdown:
- **Heading 1**: `CineBox – Đặt vé xem phim mini`.
- **Mô tả**: Website **đặt vé** *xem phim mini*, trong đó chữ **đặt vé** in đậm và chữ *xem phim mini* in nghiêng.
- **Bảng 2 cột** `Thư mục | Nội dung` với 3 dòng: `docs | Tài liệu bàn giao`; `data | Bảng tính bán vé`; `logs | Log truy cập website`.
- **Code block** chứa lệnh PowerShell hoặc Terminal liệt kê toàn bộ dự án (lệnh đã dùng ở Mục 4.2).
- **Task list** 2 mục: `Sắp xếp thư mục dự án` (đã xong `[x]`); `Upload dự án lên GitHub` (chưa xong `[ ]`).
- **Blockquote**: `Không upload file .env lên GitHub.`

Dùng VS Code tạo thêm 2 file ở thư mục gốc (trong VS Code chọn New File, gõ đúng tên file):
- `.gitignore`: có dòng `.env` để Git bỏ qua file bí mật.
- `.env.example`: liệt kê đủ 3 tên biến của file `.env` (`DB_HOST`, `DB_SECRET`, `TICKET_API_KEY`), mỗi biến một dòng dạng `TEN_BIEN=` và để trống giá trị.
- Tự kiểm tra: trong kết quả liệt kê có file ẩn ở Mục 4.2, tên file phải đúng là `.gitignore` và `.env.example`, không có đuôi `.txt`. Nếu bị thêm đuôi `.txt` thì đổi tên lại.

### 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi
Mở file `web/index.html` bằng Chrome hoặc Edge. Trang đang có 2 lỗi: logo không hiển thị và bảng giá vé không có dữ liệu.
- Mở DevTools (`F12`), tab **Network**, tải lại trang (`F5`): tìm request bị lỗi (màu đỏ). Chụp màn hình, lưu thành `evidence/network.png`.
- Chuyển sang tab **Console**: tìm dòng lỗi màu đỏ. Chụp màn hình, lưu thành `evidence/console.png`.
- Điền bảng lỗi ở mục 4.6 của `bai_lam.md`: tab phát hiện lỗi, tên file hoặc thông báo lỗi, cách khắc phục.
- **Sửa lỗi logo**: mở `web/index.html` bằng VS Code, tại dòng 10 có đoạn `src="images/logo.png"`; thay `logo.png` bằng đúng tên file ảnh trong thư mục `web/images` (`logo-cinebox.png`). Lưu file, tải lại trang (`Ctrl + Shift + R`) để logo hiển thị. Không bắt buộc sửa lỗi ở tab Console.
- Giả sử bạn không tự sửa được lỗi ở tab Console và cần nhờ trưởng nhóm hỗ trợ: điền phần **Báo cáo lỗi** trong mục 4.6 của `bai_lam.md` gồm 4 phần `Context`, `Expected`, `Actual`, `Log` (`Log` chép nguyên văn dòng lỗi trong tab Console).
- Viết một câu tìm kiếm Google dùng toán tử `site:` (giới hạn ở `stackoverflow.com`) và cặp ngoặc kép `" "` chứa thông báo lỗi.

### 4.7. Excel
Mở `data/ban_ve_thang_11.xlsx`, sheet `DatVe`:
- Dùng `VLOOKUP` khớp chính xác để lấy `loai_phong` và `gia_ve` từ sheet `BangGia`.
- Dùng công thức `thanh_tien = so_ve * gia_ve`; điền công thức cho tất cả đơn đặt vé.
- Bật **AutoFilter** trên toàn bộ bảng, lọc `thanh_tien >= 400000` rồi lưu file.
- Không nhập tay loại phòng, giá vé hoặc thành tiền thay cho công thức.

---

## Phụ lục 2. Xử lý khi máy chặn chạy script PowerShell (Windows)
Nếu chạy `.\tong_hop.ps1` báo lỗi *"running scripts is disabled on this system"*, làm lần lượt 2 bước sau trong cùng cửa sổ PowerShell:

**Bước 1**: Gõ lệnh sau rồi nhấn Enter (nếu hỏi xác nhận, gõ `Y` rồi nhấn Enter):
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**Bước 2**: Chạy lại script:
```powershell
.\tong_hop.ps1
```
*(Ghi cả 2 lệnh đã dùng vào mục 4.4 của `bai_lam.md`)*.

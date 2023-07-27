// Lấy thẻ icon và thẻ div popup
const icon = document.querySelector('.icon');
const popup = document.querySelector('.popup');

// Thêm sự kiện click vào icon
icon.addEventListener('click', function () {
    // Hiển thị thẻ div popup với hiệu ứng scale
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.transform = 'scale(1)';
    }, 10);
});

// Thêm sự kiện click ra ngoài thẻ div popup để tắt popup
document.addEventListener('click', function (event) {
    // Kiểm tra xem người dùng đã click vào thẻ div popup chưa
    if (event.target.closest('.popup')) return;

    // Nếu không, tắt thẻ div popup với hiệu ứng scale
    popup.style.transform = 'scale(0)';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
});
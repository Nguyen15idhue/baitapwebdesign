// scripts.js
function showSection(sectionId) {
    // Ẩn tất cả các phần
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Hiển thị phần được chọn
    document.getElementById(sectionId).style.display = 'block';
}

// Mặc định hiển thị trang cá nhân khi tải trang
showSection('trangcanhan');

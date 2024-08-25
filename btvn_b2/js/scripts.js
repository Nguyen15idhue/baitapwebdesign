document.addEventListener('DOMContentLoaded', function() {
    const win11Button = document.getElementById('win11Button');
    const win10Button = document.getElementById('win10Button');
    const win11Content = document.getElementById('windows11');
    const win10Content = document.getElementById('windows10');

    win10Button.addEventListener('click', function() {
        win11Content.style.display = 'none';
        win10Content.style.display = 'block';
        win11Button.classList.remove('active');
        win10Button.classList.add('active');
    });

    // Chỉ để kiểm tra, bạn có thể xóa phần này nếu không cần
    win11Button.addEventListener('click', function() {
        win11Content.style.display = 'block';
        win10Content.style.display = 'none';
        win11Button.classList.add('active');
        win10Button.classList.remove('active');
    });
});
document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    const flowerContainer = document.getElementById('flowerContainer');
    const heartContainer = document.getElementById('heartContainer');

    if (name) {
        greetingMessage.textContent = `Chúc mừng 20/10, ${name}! Chúc bạn luôn xinh đẹp, hạnh phúc và thành công!`;
        
        // Tạo hoa
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flowerContainer.appendChild(flower);
        
        // Tạo trái tim
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Đặt vị trí ngẫu nhiên cho trái tim
        heart.style.left = `${Math.random() * 100}%`;
        heartContainer.appendChild(heart);

        // Xóa trái tim sau khi animation kết thúc
        heart.addEventListener('animationend', function() {
            heart.remove();
        });
    } else {
        greetingMessage.textContent = 'Vui lòng nhập tên của bạn!';
    }
});
document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    const flowerContainer = document.getElementById('flowerContainer');
    const heartContainer = document.getElementById('heartContainer');

    if (name) {
        const greetingMessage = document.getElementById('greetingMessage');
        greetingMessage.innerHTML = `Chúc mừng 20/10<br>Chúc ${name}<br>Luôn xinh đẹp hạnh phúc và thành công!❤️❤️❤️`;
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flowerContainer.appendChild(flower);
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heartContainer.appendChild(heart);
        heart.addEventListener('animationend', function() {
            heart.remove();
        });
    } else {
        greetingMessage.textContent = 'Vui lòng nhập tên của bạn!';
    }
});

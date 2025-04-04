function showContent(id) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * -20 + 'vh';
    star.style.animationDuration = (Math.random() * 1 + 1) + 's';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 2000);
}

setInterval(createStar, 200);
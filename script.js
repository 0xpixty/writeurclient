function showContent(id) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const side = Math.random() < 0.5 ? 'left' : 'right';
    star.style.left = side === 'left' ? Math.random() * 20 + 'vw' : (80 + Math.random() * 20) + 'vw';
    star.style.top = Math.random() * -20 + 'vh';
    star.style.animationDuration = (Math.random() * 1 + 1) + 's';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 2000);
}

setInterval(createStar, 50);

function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    const activeContent = document.getElementById(id);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}
function toggleCommand(element) {
    element.classList.toggle('active');
}
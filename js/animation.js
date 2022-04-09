let id = null;

function moveImage() {
    const header = document.getElementById('specialHeaderAnimate');
    let pos = 10;

    clearInterval(id);
    id = setInterval(frame, 40);
    function frame() {
        if (pos == 35) {
            clearInterval(id);
            moveImage();
        } else {
            pos++;
            header.style.fontSize = pos + 'px';
        }
    }
}


moveImage();
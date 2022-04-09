let id = null;

function moveImage() {
    const twins = document.getElementById('twins');
    let pos = 0;

    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 100) {
            clearInterval(id);
            moveImageReverse();
        } else {
            pos++;
            twins.style.borderRadius = pos + '%';
        }
    }
}

function moveImageReverse() {
    const twins = document.getElementById('twins');
    let posB = 100;

    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (posB == 0) {
            clearInterval(id);
            moveImage();
        } else {
            posB--;
            twins.style.borderRadius = posB - '%';
        }
    }

}

moveImage();
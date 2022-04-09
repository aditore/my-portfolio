const closeSpan2 = document.getElementById('closeSecond');
const responseModal = document.getElementById('responseModal');
const accessResponseModal =document.getElementsByClassName('notYet');

for(var i = 0; i < accessResponseModal.length; i++) {
    accessResponseModal[i].onclick = function() {
        responseModal.style.display = 'block';
    }
}

closeSpan2.onclick = function() {
    responseModal.style.display = 'none';
}

window.onlclick = function(event) {
    if (event.target == responseModal) {
        responseModal.style.display = 'none';
    }
}
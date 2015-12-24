// Jenkins js tweaks
function applyChanges() {
    head = document.getElementsByTagName('head');
    links = head[0].getElementsByTagName('link');
    for (var i in links) {
        link = links[i];
        if (link.getAttribute('rel') == 'shortcut icon') {
            changeFavicon(link);
            break;
        }
    }
    changeHeaderIcon();
    addMatrixLabel();


};
var body = document.getElementsByTagName('body');
if (window.addEventListener) {
    window.addEventListener('load', applyChanges, false);
}
else if (window.attachEvent) {
    window.attachEvent('onload', applyChanges );
}

function changeHeaderIcon() {
    document.getElementById('jenkins-head-icon').src = 'http://yohanate.github.io/matrixcss/repo/img/jenkins-head-icon-smaller.png';
    document.getElementById('jenkins-head-icon').style.display = 'block';
}

function changeFavicon(link) {
    link.setAttribute('href', 'http://yohanate.github.io/matrixcss/repo/img/favicon.ico');
}

function addMatrixLabel() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id','jenkins-head-label');
    newDiv.innerHTML = 'matrix';

    var parentDiv = document.getElementById('jenkins-home-link');
    parentDiv.appendChild(newdiv);
}

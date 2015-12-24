// Jenkins js tweaks
function applyChanges() {
    changeHeaderIcon();
    changeFavicon();
};
var body = document.getElementsByTagName('body');
if (window.addEventListener) {
    window.addEventListener('load', applyChanges, false);
}
else if (window.attachEvent) {
    window.attachEvent('onload', applyChanges );
}

function changeHeaderIcon() {
    document.getElementById('jenkins-head-icon').src = 'http://yohanate.github.io/matrixcss/repo/img/jenkins-head-icon-small.png';
    document.getElementById('jenkins-head-icon').style.display = 'block';
}

function changeFavicon() {
    link.setAttribute('href', 'http://yohanate.github.io/matrixcss/repo/img/favicon.ico');
}
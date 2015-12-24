// Jenkins js tweaks
function applyChanges() {
    head = document.getElementsByTagName('head');
    links = head[0].getElementsByTagName('link');
    for (var i in links) {
        link = links[i];
        if (link.getAttribute('rel') == 'shortcut icon') {
            link.setAttribute('href', '/userContent/favicon.ico');
            break;
        }
    }
    document.getElementById('jenkins-head-icon').src = 'http://yohanate.github.io/matrixcss/repo/img/jenkins-head-icon-small.png';
    document.getElementById('jenkins-head-icon').show();
};
var body = document.getElementsByTagName('body');
if (window.addEventListener) {
    window.addEventListener('load', applyChanges, false);
}
else if (window.attachEvent) {
    window.attachEvent('onload', applyChanges );
}


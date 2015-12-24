// Jenkins js tweaks
function myFunction() {
    head = document.getElementsByTagName('head');
    links = head[0].getElementsByTagName('link');
    for (var i in links) {
        link = links[i];
        if (link.getAttribute('rel') == 'shortcut icon') {
            link.setAttribute('href', '/userContent/favicon.ico');
            break;
        }
    }
};
var body = document.getElementsByTagName('body');
if (window.addEventListener) {
    window.addEventListener('load', myFunction, false);
    document.getElementById('jenkins-head-icon').show();
    document.getElementById('jenkins-head-icon').src = 'http://yohanate.github.io/matrixcss/repo/img/jenkins-head-icon-small.png';
}
else if (window.attachEvent) {
    window.attachEvent('onload', myFunction );
}


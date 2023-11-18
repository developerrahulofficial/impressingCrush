function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Load mobile script for mobile devices
    loadScript('touchControl.js');
} else {
    // Load desktop script for other devices
    loadScript('mouseControl.js');
}

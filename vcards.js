if (typeof JFRTEAMY_VCARDS == 'undefined') {
    JFRTEAMY_VCARDS = true;
    window.onload = function() {
        var idPattern = /r=([0-9]*)/;
        var links = document.getElementsByTagName('a');
        var fotoSpan = document.getElementById('foto');
        var loader = document.createElement('img');
        loader.src = 'images/A.gif';
        loader.style.display = 'none';
        loader.style.margin = '0 30px';
        fotoSpan.parentNode.insertBefore(loader, fotoSpan);
        var loadedPid = undefined;
        for (var i = 0; i < links.length; i++) {
            var link = new URL(links[i].href);
            if (link.hostname.substr(-10) == 'msc.com.pl') {
                var pidMatch = link.search.match(idPattern);
                if (pidMatch) {
                    var pid = pidMatch[1];
                    if (parseInt(pid) < 30000) {
                        links[i].onmouseover = (function(p) { return function() {
                            if (p != loadedPid) {
                                var iframeURL = '//cezar.brydzystow.pl/' + p;
                                var iframe = document.createElement('iframe');
                                iframe.src = iframeURL;
                                iframe.onload = function() {
                                    iframe.width = '600px';
                                    iframe.height = '500px';
                                    iframe.style.border = 'none';
                                    fotoSpan.style.visibility = 'visible';
                                    loader.style.display = 'none';
                                }
                                fotoSpan.innerHTML = '';
                                loader.style.display = 'inline-block';
                                fotoSpan.style.visibility = 'hidden';
                                fotoSpan.append(iframe);
                                loadedPid = p;
                            }
                        }})(pid);
                    } else {
                        links[i].href = '#';
                        links[i].onmouseover = function() {
                            fotoSpan.innerHTML = '';
                        }
                    }
                }
            }
        }
    }
}

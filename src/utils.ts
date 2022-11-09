export function request(url) {
    var req: XMLHttpRequest = null;
    return new Promise(
        function (callback, error) {
            req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                if (req.readyState === 4) {
                    if ((req.status >= 200 && req.status < 300) || req.status === 1223) {
                        callback(req);
                    } else {
                        error(req);
                    }
                    req.onreadystatechange = function () {
                    };
                }
            };

            req.open('GET', url);
            req.responseType = '';

            req.send(null);
        }
    );
}


export function pathToTitle(path) {
    return path
        .replaceAll("-", " ");
}
export default function get(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.overrideMimeType("application/json");
        request.open("GET", url, true);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status !== 200) {
                    reject(new Error("Response has status code " + request.status));
                }
                else {
                    resolve(request.responseText);
                }
            }
        };
        request.send();
    });
}
//# sourceMappingURL=request.js.map
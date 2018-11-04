function validateRequest(request) {
    let uriPattern = /^(\.*[A-Za-z0-9]+)+$/;
    let messagePattern = /^([^<>\\&'"]+)$/;

    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let validUri = (request.uri === "*" || uriPattern.test(request.uri)) && request.uri;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let validMessage = (messagePattern.test(request.message) || request.message === "") && request.message !== undefined;

    if (!validMethods.includes(request.method)) {
        throw new Error("Invalid request header: Invalid Method");
    } else if (!validUri) {
        throw new Error("Invalid request header: Invalid URI");
    } else if (!validVersions.includes(request.version)) {
        throw new Error("Invalid request header: Invalid Version")
    } else if (!validMessage) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return request;
}

validateRequest({
    method: 'GET',
    uri: '',
    version: 'HTTP/1.1',
    message: ''
});

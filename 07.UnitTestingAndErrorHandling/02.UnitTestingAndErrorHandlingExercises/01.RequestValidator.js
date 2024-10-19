function solve(httpRequestObject) {
    const validUriRegEx = /^([A-Za-z.\d]+|\*)$/;
    const validMessageRegEx = /^[^<>\\&'"]*$/;

    if (!httpRequestObject.hasOwnProperty('method') || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(httpRequestObject.method)) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!httpRequestObject.hasOwnProperty('uri') || !validUriRegEx.test(httpRequestObject.uri) || httpRequestObject.uri == '') {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!httpRequestObject.hasOwnProperty('version') || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(httpRequestObject.version)) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!httpRequestObject.hasOwnProperty('message') || !validMessageRegEx.test(httpRequestObject.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpRequestObject;
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));



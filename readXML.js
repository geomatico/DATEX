const readXML = function (url, callback) {
    const xhr = new window.XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('Accept', 'text/xml')
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300 && xhr.response) {
            callback(xml.read(xhr.response, true))
        } else {
            throw new Error(xhr.statusText, xhr.status)
        }
    }
    xhr.send()
    return xhr
}

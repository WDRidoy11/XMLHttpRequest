const makerequest = (method, url, data) => {
    return new Promise((resove, reject) => {
        let xml = new XMLHttpRequest();
        xml.open(method, url);
        xml.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        xml.onload = () => {
            let data = xml.response;
            console.log(xml.status);
            console.log(xml.statusText);
            console.log(xml.responseURL);
            console.log(xml.responseType);
            console.log(JSON.parse(data));
        }
        xml.onerror = () => {
            console.log('This is errore');
        }
        xml.send(JSON.stringify(data));
    })
};
const getData = () => {
    makerequest('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            console.log(res);
        }).catch(() => {
            alert('Something Problem Please Chack Now')
        })
};
getData();
const sentData = () => {
    makerequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
};
sentData();
const updatetData = () => {
    makerequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'Mother',
        body: 'Father',
        userId: 1,
    })
};
updatetData();
const updatesingletData = () => {
    makerequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Ridoy Sharif',
    })
};
updatesingletData();
const deleteData = () => {
    makerequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Ridoy Sharif',
    })
};
deleteData();
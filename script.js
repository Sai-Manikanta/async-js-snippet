// Asyncronous Javascript

callbacks   
const getData = (uri, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        } else if(request.readyState === 4) {
            callback('Something went wrong', undefined);
        }
    })
    
    request.open('GET', uri);
    request.send();
}

console.log(1);
console.log(2);

getData('https://jsonplaceholder.typicode.com/todos', (error, data) => {
    if(!error){
        console.log(data);
        getData('https://jsonplaceholder.typicode.com/photos', (error, data) => {
            if(!error){
                console.log(data);
                getData('https://jsonplaceholder.typicode.com/comments', (error, data) => {
                    if(!error){
                        console.log(data);
                    } else {
                        console.log(error)
                    }
                });
            } else {
                console.log(error)
            }
        });
    } else {
        console.log(error)
    }
});

console.log(3);
console.log(4);

Promices

const isOneNum = (num) => {
    return new Promise((resolve, reject) => {
        if(num === 1){
            resolve('Yes num is one.')
        } else {
            reject(`No num is not 1. it is ${num}.`)
        }
    })
}

isOneNum(1)
    .then(res => console.log(res))
    .catch(err => console.log(err))

const getData = (uri) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                resolve(request.responseText);
            } else if(request.readyState === 4) {
                reject('Something went wrong');
            }
        })
        
        request.open('GET', uri);
        request.send();
    })
};

getData('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
        console.log(res);
        return getData('https://jsonplaceholder.typicode.com/photos')
    })
    .then(res => {
        console.log(res);
        return getData('https://jsonplaceholder.typicode.com/todos')
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err))

console.log(1);
console.log(2);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return fetch('https://jsonplaceholder.typicode.com/photos')
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return fetch('https://jsonplaceholder.typicode.com/todos')
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))

console.log(3);
console.log(4);


console.log(1);
console.log(2);

const getTodos = async () => {
    try {
        const commentsRes = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await commentsRes.json();

        const photosRes = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await photosRes.json();

        const todosRes = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await todosRes.json();

        return { comments, photos, todos }
    } catch(err) {
        throw new Error(err);
    }
};

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err))

console.log(3);
console.log(4);

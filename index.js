// Add your code here
console.log('Hello');

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name, email})
    })
    .then(res => res.json())
    .then(obj => document.body.append(obj['id']))
    .catch(err => document.body.append(err))

}

const dataloadwebsite = () => {
    const url = ('https://jsonplaceholder.typicode.com/users');
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}
const display = (posts) => {
    const poestcontainer = document.getElementById('post-container')
    poestcontainer.innerHTML('')
    posts.forEach((post) => {
        console.log(post);
    })
}

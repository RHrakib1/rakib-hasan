const dataloadwebsite = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}

const display = (users) => {
    const postcontainer = document.getElementById('post-container');
    postcontainer.innerHTML = '';

    users.forEach((user) => {
        const postcard = document.createElement("div");

        postcard.innerHTML = `
        
        <div class="post-card">
            <h2>${user.name}</h2>
            <div class="username">@${user.username}</div>

            <div class="info">📧 ${user.email}</div>
            <div class="info">📞 ${user.phone}</div>
            <div class="info">🌐 ${user.website}</div>
            <div class="info">📍 ${user.address.city}</div>

            <div class="company">🏢 ${user.company.name}</div>
        </div>
        `;

        postcontainer.append(postcard);
    });
}
dataloadwebsite()
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionEl = document.getElementById("section")

function createPost(n) {
    sectionEl.innerHTML += `
    <div class="container">
    <div class="post-header">
        <img class="avatar" id="avatar" src=${posts[n].avatar}>
        <div>
            <h2 id="name">${posts[n].name}</h2>
            <p id="location">${posts[n].location}</p>
        </div>
    </div>
    <img id="post" src=${posts[n].post}>
    <div class="icons">
        <img onclick="${newLikes(n)}" id="heart-icon" src="images/icon-heart.png">
        <img src="images/icon-comment.png">
        <img src="images/icon-dm.png">
    </div>
    <p><span id="likes">${posts[n].likes}</span> likes</p>
    <p id="comment"><span id="username">${posts[n].username}</span> ${posts[n].comment}</p>
</div>
`
}

for (let i = 0; i < posts.length; i++) {
    createPost(i)
}

function newLikes(n) {
    posts[n].likes++
}


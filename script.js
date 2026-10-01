// Store all blog posts
let posts = [];

// Select form elements from the HTML
const postForm = document.getElementById("postForm");
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");
const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");
const postList = document.getElementById("postList");

// Handle form submission
postForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing when the form is submitted
    event.preventDefault();

    // Clear old error messages
    titleError.innerText = "";
    contentError.innerText = "";

    // Validate the post title
    if (postTitle.validity.valueMissing) {
        titleError.innerText = "Post title is required.";
        return;

        // Validate the post content
    } else if (postContent.validity.valueMissing) {
        contentError.innerText = "Post content is required.";
        return;
    }

    let post = {
        id: Date.now(),
        title: postTitle.value,
        content: postContent.value,
    };

    // Add the new post to the posts array
    posts.push(post);

    // Display the updated posts
    renderPosts();

    // Clear the form
    postTitle.value = "";
    postContent.value = "";

    console.log(posts);
});

// Display all posts on the page
function renderPosts() {
    postList.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        let currentPost = posts[i];

        // Create a container for each post
        let postItem = document.createElement("div");

        // Create and display the post title
        let postHeading = document.createElement("h3");
        postHeading.innerText = currentPost.title;

        // Create and display the post content
        let postText = document.createElement("p");
        postText.innerText = currentPost.content;

        postItem.appendChild(postHeading);
        postItem.appendChild(postText);

        postList.appendChild(postItem);
    }
}

// Load saved posts from localStorage or start with an empty array
let posts = JSON.parse(localStorage.getItem("posts")) || [];

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

    // Create a new post object
    let post = {
        id: Date.now(),
        title: postTitle.value,
        content: postContent.value,
    };

    // Add the new post to the posts array
    posts.push(post);

    // Save posts to localStorage
    savePosts();

    // Display the updated posts
    renderPosts();

    // Clear the form
    postTitle.value = "";
    postContent.value = "";
});

// Display all posts on the page
function renderPosts() {

    // Clear the current post display
    postList.innerHTML = "";

    // Loop through the posts array
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

        // Create a delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        // Delete the selected post
        deleteButton.addEventListener("click", function () {

            posts = posts.filter(function (post) {
                return post.id !== currentPost.id;
            });

            // Save the updated posts
            savePosts();

            // Update the display
            renderPosts();
        });

        // Add the post elements to the post container
        postItem.appendChild(postHeading);
        postItem.appendChild(postText);
        postItem.appendChild(deleteButton);

        // Add the post to the page
        postList.appendChild(postItem);
    }
}

// Save posts to localStorage
function savePosts() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

// Display saved posts when the page loads
renderPosts();
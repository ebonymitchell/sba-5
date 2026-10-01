# Interactive Personal Blog Platform

## Description

This is a simple personal blog application that allows users to create, edit, and delete blog posts.

I used JavaScript to dynamically display the posts and localStorage to save them so they don't disappear every time the page is refreshed.

## Features

- Create new blog posts
- Edit existing posts
- Delete posts
- Form validation for the title and content
- Custom error messages
- Posts are dynamically displayed with JavaScript
- Posts are saved using localStorage
- Saved posts are loaded when the page is refreshed

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Constraint Validation API
- localStorage

## How to Run

Clone or download the repository and open `index.html` in a browser.

No additional installation is needed.

## Development Process

I started by creating the HTML form and a section where the blog posts could be displayed. From there, I used JavaScript to select the elements I needed and added validation to make sure the user entered both a title and content before creating a post.

Once I had that working, I created a `renderPosts()` function to display the posts on the page. Each post is stored as an object inside the `posts` array.

I added localStorage so the posts would still be there after refreshing the page. After that, I added the ability to delete posts and then edit existing posts.

## Challenges

One of my challenges was keeping track of where different pieces of JavaScript needed to go. I originally had the Delete button code outside of `renderPosts()`, but it needed to be inside the function so that each post could get its own Delete button and the correct post could be removed.

I also mixed up `post` and `posts` at one point. `post` was the individual object I created, while `posts` was the array where all of the post objects were being stored. Once I understood that, `posts.push(post)` made a lot more sense.

Another challenge was making sure every change was also saved to localStorage. It wasn't enough to change what was showing on the page. The array also needed to be saved again after creating, editing, or deleting a post so the changes would still be there after refreshing the browser.

## Testing

I tested the application by trying to submit an empty form, submitting only a title, creating multiple posts, editing a post, and deleting a post.

I also refreshed the browser after creating, editing, and deleting posts to make sure localStorage was working correctly.

Everything passed the final tests.

## Known Issues

There are no known issues with the required functionality at this time.
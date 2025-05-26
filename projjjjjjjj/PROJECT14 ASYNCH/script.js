//Make sure all assets are loaded
document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.querySelector(".posts-container");
  const APIUrl = "https://jsonplaceholder.typicode.com/posts";

  async function fetchPosts() {
    try {
      //make the http request
      const response = await fetch(APIUrl); //?await as fet() method gives promise
      const posts = await response.json();
      //clear the loading message
      postsContainer.innerHTML = ""; //?EMPTIED CONTENT
      //display posts
      posts.forEach((post) => {
        const postElement = createPostElement(post); //?downside we have created function
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      postsContainer.innerHTML =
        '<p style="color:red;text-align:center">Error loading posts. please try again later</p>';
    }
  }

  //create post html elements
  function createPostElement(post) {
    const article = document.createElement("article");
    article.className = "post-card";

    const title = document.createElement("h2");
    title.className = "post-title";
    title.textContent = post.title;

    const body = document.createElement("p");
    body.className = "post-body";
    body.textContent = post.body;

    article.appendChild(title);
    article.appendChild(body);

    return article;
  }
  //call
  fetchPosts();
});

import errors from "../config/errors";
import posts from "../mocks/posts.json";

export async function getPostsList() {
  return posts.map((post) => ({
    ...post,
    publishedAt: new Date(post.publishedAt),
  }));
}

export async function getMostViewedPostsList() {
  return posts.map((post) => ({
    ...post,
    publishedAt: new Date(post.publishedAt),
  }));
}

export async function createPost({ history, userName }) {
  return {
    content: history,
    userName,
    imagePath: "/images/user.svg"
  };
}
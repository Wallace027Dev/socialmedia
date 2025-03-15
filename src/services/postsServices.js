import errors from "../config/errors";
import posts from "../mocks/posts.json";

// Função auxiliar para adicionar um delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPostsList() {
  await delay(1500);
  return posts.map((post) => ({
    ...post,
    publishedAt: new Date(post.publishedAt),
  }));
}

export async function getMostViewedPostsList() {
  await delay(1500);
  return /* posts.map((post) => ({
    ...post,
    publishedAt: new Date(post.publishedAt),
  })); */
}

export async function createPost({ history, userName }) {
  await delay(2000);
  return {
    content: history,
    userName,
    imagePath: "/images/user.svg"
  };
}

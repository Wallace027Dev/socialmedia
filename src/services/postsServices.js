import posts from "../mocks/posts.json";

const LOCAL_STORAGE_KEY = "posts";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMostViewedPostsList() {
  await delay(1500);
  return; /* posts.map((post) => ({
    ...post,
    publishedAt: new Date(post.publishedAt),
  })); */
}

export async function getPostsList() {
  const storedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const storedPostsList = storedPosts ? JSON.parse(storedPosts) : [];

  // Combina os posts do mock com os do LocalStorage
  const allPosts = [...posts, ...storedPostsList];

  // Retorna todos os posts combinados, incluindo os mockados e os do LocalStorage
  return allPosts.map((post) => ({
    ...post,
    publishedAt: new Date(post.publishedAt)
  }));
}

// Função para criar um novo post e salvar no LocalStorage
export async function createPost({ history, userName }) {
  const newPost = {
    content: history,
    userName,
    imagePath: "/images/user.svg",
    publishedAt: new Date()
  };

  // Pegando os posts do LocalStorage
  const storedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const postsList = storedPosts ? JSON.parse(storedPosts) : [];

  // Adicionando o novo post à lista existente
  postsList.push(newPost);

  // Salvando a lista atualizada de posts no LocalStorage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(postsList));

  return newPost;
}

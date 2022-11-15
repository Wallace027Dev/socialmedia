import { useState, useEffect } from "react";

import Feed from "../components/Feed";
import PostForm from "../components/PostForm";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(async (response) => {
        if (!response.ok){
          setHasError(true)
          return
        }
        
        const body = await response.json();

        setPosts(
          body.map((post) => ({
            ...post,
            publishedAt: new Date(post.publishedAt),
          }))
        );
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function handleSubmit({ history, userName }) {
    setPosts([
      ...posts,
      {
        id: Math.random(),
        content: history,
        userName,
        publishedAt: new Date(),
      },
    ]);
  }

  return (
    <>
      <PostForm onSubmit={handleSubmit} />

      <main>
        <Feed
          isLoading={isLoading}
          hasError={hasError}
          posts={posts}
          title="Seu Feed"
          subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
        />
      </main>
    </>
  );
}

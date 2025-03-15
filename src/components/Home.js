"use client";
import { useState, useEffect } from "react";
import { MainContainer } from "../styles/Main";

import Feed from "../components/Feed";
import PostForm from "../components/PostForm";
import { getPostsList } from "../services/postsServices";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsList = await getPostsList();

        if (!postsList) {
          setHasError(true);
          return;
        }

        setPosts(postsList);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }
    loadPosts();
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

      <MainContainer>
        <Feed
          isLoading={isLoading}
          hasError={hasError}
          posts={posts}
          title="Seu Feed"
          subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
        />
      </MainContainer>
    </>
  );
}

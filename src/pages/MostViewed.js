import Feed from '../components/Feed';
import { useState, useEffect } from "react";

export default function MostViewed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/posts/most-viewed")
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

  return (
    <main className="most-viewed">
      <Feed
      hasError={hasError}
        isLoading={isLoading}
        posts={posts}
        title="Mais vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}

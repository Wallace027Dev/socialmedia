import Feed from '../components/Feed';
import { useState, useEffect } from "react";

export default function MostViewed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetch('http://localhost:3001/posts/most-viewed')
    .then(async (response)=>{
      const body = await response.json();

      setPosts(body.map((post)=>({
        ...post,
        publishedAt: new Date(post.publishedAt)
      })));
      setIsLoading(false);
    })
  },[]);

  return (
    <main className="most-viewed">
      <Feed
        isLoading={isLoading}
        posts={posts}
        title="Mais vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}

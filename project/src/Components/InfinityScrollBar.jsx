import { useEffect, useState } from "react";

export default function App() {
  const [pages, setPages] = useState(1);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pages}`
    );
    const data = await res.json();
    console.log("data", data);
    setPosts((prevPosts) => [...prevPosts, ...data]);
  };

  useEffect(() => {
    fetchPosts();
  }, [pages]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight + 50 >= fullHeight) {
        setPages((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Infine scroll Demo</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

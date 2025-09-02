// # Requirements

// Create a component with an input element

// - The input will take in a URL
//     - `https://jsonplaceholder.typicode.com/posts`
//     - The user has to type in the URL manually
// - It will have a submit button called `Fetch`
// - There will be a `retry` button to manually refetch again if the request fail
// - If the user clicks the button, it will fetch the posts and display them
//     - The post has the structure of

//     ```tsx
//     type Post = {
//     	userId: number;
//     	id: number;
//     	title: string;
//     	body: string;
//     }
//     ```

// # Implementation

// - You have to fetch using a custom hook
// - The hook will return
//     - The posts to display
//     - refetch function
//     - loading state
//     - error state

//custom hook for fetching
import { useState } from "react";

const useFetchPosts = (url) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, fetchPosts };
};

// Component
const Fetchs = ({ url }) => {
  const [inputUrl, setInputUrl] = useState(url || "");
  const { posts, loading, error, fetchPosts } = useFetchPosts(inputUrl);

  return (
    <div className="Fetch-container">
      <h1>Post Fetchers</h1>
      <p>Enter Url to fetch and display posts</p>
      <div className="fetch-container">
        <input
          type="text"
          value={inputUrl}
          placeholder="Enter URL"
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button onClick={fetchPosts} disabled={!inputUrl || loading}>
          {loading ? "Loading..." : "Fetch"}
        </button>
        <button onClick={fetchPosts}>Retry</button>
      </div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

export default Fetchs;

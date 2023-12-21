import { useSelector } from "react-redux";

import { getPosts } from "@features/post/";
import BlogPosts from "@features/post/components/BlogPosts";
import { useGetPostsQuery } from "@features/post/service";

const Home = () => {
  useGetPostsQuery();

  const posts = useSelector(getPosts);
  console.log("posts: ", posts);

  return (
    <div className="HomeContainer">
      <BlogPosts posts={posts} />
    </div>
  );
};

export default Home;

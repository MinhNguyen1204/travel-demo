import BlogPostItem from "../BlogPostItem";

const BlogPosts = ({ posts }: { posts: PostType[] }) => (
  <div className="flex flex-col gap-4 p-4">
    {posts.map((post) => (
      <BlogPostItem key={post.id} post={post} />
    ))}
  </div>
);

export default BlogPosts;

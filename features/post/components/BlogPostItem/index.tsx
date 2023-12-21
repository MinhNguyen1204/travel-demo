const BlogPostItem = ({ post }: { post: PostType }) => (
  <div className="flex border rounded flex-col gap-4">
    <h3 className="text-base font-bold">{post.title}</h3>
    <p className="text-sm">{post.body}</p>
  </div>
);

export default BlogPostItem;

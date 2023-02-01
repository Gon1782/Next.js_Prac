interface Props {
  post: {
    body: string;
    id: number;
    title: string;
    userId: number;
  };
}

const Post = ({ post }: Props) => {
  return (
    <div>
      Post: {post.id}
      WriterId: {post.userId}
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
    </div>
  );
};

export default Post;

export const getStaticProps = async (context: any) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
};
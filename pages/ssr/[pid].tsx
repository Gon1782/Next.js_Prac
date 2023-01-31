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

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const { pid } = params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
};

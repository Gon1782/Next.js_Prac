interface Props {
  post: {
    body: string;
    id: number;
    title: string;
  };
}

const Post = ({ post }: Props) => {
  return (
    <div>
      Post: {post.id}
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: "blocking", // false, true, "blocking"
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;

  const response = await fetch(`http://localhost:3001/posts/${id}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
    revalidate: 5,
  };
};

import { useRouter } from "next/router";

interface Props {
  post: {
    body: string;
    id: number;
    title: string;
    userId: number;
  };
}

const Post = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>로딩중...</div>;
  }

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

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
    ],
    fallback: "blocking", // false, true, "blocking"
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
};

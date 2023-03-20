import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Hello {id}</h1>
      <img src={post.image} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const req = await fetch(`http://localhost:3000/posts.json`);
  const data = await req.json();

  const paths = data.map((post) => {
    return { params: { id: post } };
  });

  return {
    paths,
    fallback: false,
  };
}

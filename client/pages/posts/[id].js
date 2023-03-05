import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

import { BsArrowLeftShort } from "react-icons/bs";

import { Date } from "../../components";
import postPageStyles from "../../styles/PostPage.module.css";

const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(
    id ? `/api/posts/post/${id}` : null,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className={postPageStyles.container}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={postPageStyles.back}>
        <Link href="/posts">
          <BsArrowLeftShort />
          <p> back</p>
        </Link>
      </div>
      <div className={postPageStyles.article_container}>
        <div className={postPageStyles.info}>
          <p className={postPageStyles.author}>{data.author.name}</p>
          <p>
            Updated at <Date dateString={data.updatedAt} />
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </div>
  );
};

export default PostPage;

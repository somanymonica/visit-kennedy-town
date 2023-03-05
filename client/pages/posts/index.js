import useSWR from "swr";
import Link from "next/link";

import { Date } from "../../components";
import postListStyles from "../../styles/postList.module.css";

const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const PostsPage = () => {
  const { data, isLoading, error } = useSWR("/api/posts", fetcher);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className={postListStyles.container}>
      <ul className={postListStyles.list}>
        {data.map(({ id, title, updatedAt, author }) => (
          <li key={id}>
            <div className={postListStyles.listItem}>
              <div className={postListStyles.header}>
                <Link href={`/posts/${id}`}>{title}</Link>
              </div>
              <div className={postListStyles.extra_info}>
                <p className={postListStyles.author}>Edited by {author.name}</p>
                <p className={postListStyles.updated_at}>
                  <Date dateString={updatedAt} />
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

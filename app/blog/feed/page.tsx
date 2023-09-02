import {CreatePostForm} from "@/components/CreatePostForm/CreatePostForm";
import {type} from "os";

const {NEXTAUTH_URL} = process.env;

type Post = {
  _id: string;
  title: string;
  description: string;
  owner: string;
  comments: [];
};

export default async function FeedPage() {
  const res = await fetch("http://localhost:3000/api/post/list", {
    cache: "no-store",
  });

  const {posts} = await res.json();

  return (
    <section>
      <div>
        <CreatePostForm />
      </div>
      <div>
        {posts &&
          posts.map((post: Post) => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </li>
          ))}
      </div>
    </section>
  );
}

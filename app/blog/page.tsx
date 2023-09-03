import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

import {AddComment} from "@/components/AddComment/AddComment";
import {CreatePostForm} from "@/components/CreatePostForm/CreatePostForm";
import {authConfig} from "@/configs/auth";

const {NEXTAUTH_URL} = process.env;

type Post = {
  _id: string;
  title: string;
  description: string;
  owner: string;
  comments: [];
};

export default async function FeedPage() {
  const session = await getServerSession(authConfig);

  if (session?.user.status === "unauthenticated") {
    redirect("/login");
  }

  const res = await fetch(`${NEXTAUTH_URL}/api/post/authlist`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({}),
    cache: "no-store",
  });

  const {posts} = await res.json();

  return (
    <section>
      {session && session.user.data.role === "author" && (
        <div>
          <CreatePostForm />
        </div>
      )}

      <div>
        {posts &&
          posts.map((post: Post) => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              {session && session.user.data.role === "commentator" && (
                <ul>
                  {post.comments.map(({comment, owner}, i) => (
                    <li key={comment + owner + i}>
                      <p>{comment}</p>
                      <p>{owner}</p>
                    </li>
                  ))}
                </ul>
              )}
              {session && session.user.data.role === "commentator" && (
                <AddComment id={post._id} />
              )}
            </li>
          ))}
      </div>
    </section>
  );
}

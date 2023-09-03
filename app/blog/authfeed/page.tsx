import {getServerSession} from "next-auth";

import {authConfig} from "@/configs/auth";

const {NEXTAUTH_URL} = process.env;

export default async function AuthfeedPage() {
  const session = await getServerSession(authConfig);

  const owner = session?.user.data._id;

  const res = await fetch(`${NEXTAUTH_URL}/api/post/authlist`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({owner}),
    cache: "no-store",
  });

  const {posts} = await res.json();

  console.log("posts", posts);

  return (
    <section>
      <div>
        {posts &&
          posts.map((post: Post) => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              {session && session.user.data.role === "commentator" && (
                <button type="button">{`Comments ${post.comments.length}`}</button>
              )}
            </li>
          ))}
      </div>
    </section>
  );
}

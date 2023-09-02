import {CreatePostForm} from "@/components/CreatePostForm/CreatePostForm";

export default async function AuthfeedPage() {
  const res = await fetch("/api/blog/post/posts");
  console.log("AuthfeedPage", res);
  const posts = await res.json();
  console.log("posts", posts);
  // fetch(URL, {next: {revalidate: 60}}).then((res) => res.json());

  return (
    <section>
      <div>{/* <CreatePostForm /> */}</div>
      <div>
        <p>AUTH POSTS</p>
      </div>
    </section>
  );
}

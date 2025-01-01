import Post from "@/components/post";

export default function Home() {
  return (
    <main>
      <ul className="mx-auto flex max-w-4xl flex-col gap-8">
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <li key={i}>
              <Post />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

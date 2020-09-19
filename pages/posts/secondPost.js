import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>Second Post</h1>
      <div>
        <p>
          If you came from first post and now if you go back you won't see the
          first post instead the home page. Because you navigated by replacing
          history with `replace` prop.
        </p>
      </div>
    </>
  );
}

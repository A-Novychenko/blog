"use client";

import {Metadata} from "next";
import {useEffect} from "react";

export const metadata: Metadata = {
  title: "Blog | ERROR",
  description: "Test task - Blog.",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Global-error!</h2>

        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

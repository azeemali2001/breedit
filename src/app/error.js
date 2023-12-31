"use client"; // Error components must be Client Components

import { useEffect } from "react";
// import sadDog1 from "../../public/sadDog1.gif";
// import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-items-center h-screen">
      <h2 className="text-[#c88572] text-2xl ">Something went wrong!</h2>
      <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
        <iframe
          src="https://giphy.com/embed/pNE2skiVjBh5QYzqTT"
          width="100%"
          height="100%"
          style="position:absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-[#c88572] text-2xl ">Please try again</h2>{" "}
      <button
        className="button"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

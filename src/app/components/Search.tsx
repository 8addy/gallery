"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const Search = () => {
  const [text, setText] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${text}`);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Search..."
        className="w-full md:w-auto px-4 py-2 rounded-md outline-none focus:ring focus:border-blue-300 text-cyan-950"
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default Search;

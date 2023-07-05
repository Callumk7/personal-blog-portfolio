"use client";

import { atom, useAtom } from "jotai";
import { ChangeEvent } from "react";

export const searchAtom = atom("");

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useAtom(searchAtom);

  const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <input
      className="h-10 w-full border border-slate-400 bg-transparent p-1"
      type="text"
      placeholder="Search for a post"
      onChange={handleTermChange}
      value={searchTerm}
    />
  );
}

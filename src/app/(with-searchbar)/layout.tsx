"use client";
import { ReactNode, Suspense } from "react";
import SearchBar from "../components/search-bar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}

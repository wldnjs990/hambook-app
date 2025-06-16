// state같은 브라우저 기능이 들어가면 무조건 클라이언트 컴포넌트로 전환된다!(use client를 최상단에 입력하지 않아도)
"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [keywords, setKeywords] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams();
  const queryString = searchParams.get("q");

  useEffect(() => {
    setKeywords(queryString || "");
  }, []);

  return (
    <>
      <div className="mb-3 flex w-full items-center gap-1">
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="flex-1 border p-3"
          value={keywords}
          onChange={(e) => setKeywords(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              router.push(`/search?q=${keywords}`);
            }
          }}
        />
        <Link
          href={`/search?q=${keywords}`}
          className="border bg-blue-400 p-3 text-white"
        >
          검색
        </Link>
      </div>
    </>
  );
}

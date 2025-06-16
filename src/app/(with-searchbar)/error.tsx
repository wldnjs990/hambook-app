"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 클라이언트 컴포넌트는 서버, 클라이언트 둘 다 실행이 되기 때문에 use client로 클라이언트 컴포넌트 전환을 해줘야한다.
// 클라이언트 컴포넌트는 기본적으로 error 객체를 props로 전달받음
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log(error.message);
  }, []);
  return (
    <div>
      <div>에러가 발생했습니다.</div>
      <button
        onClick={() => {
          router.refresh();
          reset();
        }}
      >
        다시시도
      </button>
    </div>
  );
}

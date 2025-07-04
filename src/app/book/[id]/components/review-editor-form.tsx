"use client";

import createReviewAction from "@/actions/create-review.action";
import { useActionState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function ReviewEditorForm({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );
  useEffect(() => {
    if (state && !state.status) alert(state.error);
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-1 text-md">
      {/* input 태그의 require은 입력값이 없을경우를 방지해주는 코드임 */}
      {/* 입력을 안할시에 흔히 보이던 경고문구가 뜨면서 제출이 안됨 */}
      {/* 사용자에게 보이지 않는 input 태그를 만들때 hidden과 readonly를 사용한다 */}
      {/* hidden은 input을 숨기는 역할이고, readOnly는 next가 input값이 고정되고, 변동할 수 있는 상황이 아닌 경우 오류로 판단해 오류메세지를 출력하기 때문에 읽기전용이라고 명시해주는 것 */}
      <input name="bookId" value={bookId} hidden readOnly />
      <textarea
        className="border border-gray-200 rounded-md h-20 resize-none p-2"
        placeholder="리뷰 내용"
        name="content"
        required
      />
      <div className="flex gap-1 ml-auto">
        <input
          className="border border-gray-200 py-2 px-2 rounded-md"
          placeholder="작성자"
          name="author"
          required
        />
        <button
          type="submit"
          disabled={isPending}
          className={twMerge(
            `border border-gray-200 py-2 px-4 rounded-md text-white ${
              isPending ? "bg-gray-300" : "bg-sky-600"
            }`
          )}
        >
          {isPending ? "..." : "작성하기"}
        </button>
      </div>
    </form>
  );
}

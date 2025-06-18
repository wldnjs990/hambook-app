"use client";

import { deleteReviewAction } from "@/actions/delete-review.action";
import { useActionState, useEffect, useRef } from "react";

export default function ReviewItemDeleteButton({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: string;
}) {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );
  useEffect(() => {
    if (state && !state.status) alert(`삭제 실패 ${state.error}`);
  }, [state]);

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form action={formAction} ref={formRef}>
      <input name="reviewId" value={reviewId} hidden readOnly />
      <input name="bookId" value={bookId} hidden readOnly />
      <div
        onClick={() => formRef.current?.requestSubmit()}
        className="cursor-pointer"
      >
        {isPending ? "삭제중..." : "삭제하기"}
      </div>
    </form>
  );
}

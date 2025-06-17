// 다이나믹 페이지를 거부하는 코드 => 다이나믹 페이지일 경우 404 페이지로 보내버림
// export const dynamicParams = false;

import BookDetail from "./components/book-detail";
import createReviewAction from "@/actions/create-review.action";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <div className="mt-10">
      <form action={createReviewAction} className="flex gap-1">
        {/* input 태그의 require은 입력값이 없을경우를 방지해주는 코드임 */}
        {/* 입력을 안할시에 흔히 보이던 경고문구가 뜨면서 제출이 안됨 */}
        {/* 사용자에게 보이지 않는 input 태그를 만들때 hidden과 readonly를 사용한다 */}
        {/* hidden은 input을 숨기는 역할이고, readOnly는 next가 input값이 고정되고, 변동할 수 있는 상황이 아닌 경우 오류로 판단해 오류메세지를 출력하기 때문에 읽기전용이라고 명시해주는 것 */}
        <input name="bookId" value={bookId} hidden readOnly />
        <input
          className="border"
          placeholder="리뷰 내용"
          name="content"
          required
        />
        <input className="border" placeholder="작성자" name="author" required />
        <button type="submit" className="border p-1">
          작성하기
        </button>
      </form>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const bookId = (await params).id;
  return (
    <>
      <BookDetail bookId={bookId} />
      <ReviewEditor bookId={bookId} />
    </>
  );
}

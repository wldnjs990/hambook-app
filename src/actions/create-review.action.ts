"use server";

import { delay } from "@/app/utils/delay";
import { revalidateTag } from "next/cache";

export default async function createReviewAction(_: any, formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author)
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요",
    };
  try {
    await delay(2000);
    const req = { bookId, content, author };
    const response = await fetch(`${process.env.NEXT_API_URL}/review`, {
      method: "POST",
      body: JSON.stringify(req),
    });

    if (!response.ok) throw new Error(response.statusText);
    // 재검증 로직
    // // 1. 특정 주소의 해당하는 페이지만 재검증
    // revalidatePath(`book/bookId/${response?.bookId}`);
    // // 2. 특정 경로의 모든 동적 페이지를 재검증
    // revalidatePath(`/book/[id]`, "page");
    // // 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    // revalidatePath(`/(with-searchbar)`, "layout");
    // // 4. 모든 데이터 재검증
    // revalidatePath("/", "layout");
    // // 5. fetch 함수에서 캐싱 기능으로 {next : {tag: ['태그명']}}으로 캐싱을 설정했다면 태그값을 기준으로 데이터 캐시 재검증
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (error) {
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다. : ${error}`,
    };
  }
}

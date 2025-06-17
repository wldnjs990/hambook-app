"use server";

import reviewBook from "@/app/lib/review-book";

export default async function createReviewAction(formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) return;
  try {
    const req = { bookId, content, author };
    const response = await reviewBook(req);
    console.log(response?.id);
  } catch (error) {
    console.error(error);
  }
}

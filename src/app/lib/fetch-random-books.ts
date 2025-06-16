import { BookData } from "../types/bookType";

export const fetchRandomBooks = async (): Promise<BookData[]> => {
  const response = await fetch(`${process.env.NEXT_API_URL}/book/random`, {
    next: { revalidate: 3 },
  });
  if (!response.ok) throw new Error("데이터 통신 과정중 오류가 발생했습니다.");
  return await response.json();
};

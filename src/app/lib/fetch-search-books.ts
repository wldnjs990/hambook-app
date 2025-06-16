import { BookData } from "../types/bookType";

export const fetchSearchBooks = async (
  searchText: string
): Promise<BookData[]> => {
  const response = await fetch(
    `${process.env.NEXT_API_URL}/book/search?q=${searchText}`,
    { cache: "force-cache" }
  );
  if (!response.ok) throw new Error("데이터 통신중 오류가 발생했습니다.");
  return await response.json();
};

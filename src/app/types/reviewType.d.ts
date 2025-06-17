interface Review {
  bookId: string;
  content: string;
  author: string;
}
interface ReviewResponse extends Review {
  id: number;
  createdAt: Date;
}

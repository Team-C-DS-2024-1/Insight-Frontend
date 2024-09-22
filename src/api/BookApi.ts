import instance from "./axios";
import Book from "../interfaces/Book";

export const getAllBooks = async () => instance.get("/books");
export const getBookByTitle = async (title: string) => instance.get(`/books/title/${title}`);
export const getBookByIsbn = async (isbn: string) => instance.get(`/books/isbn/${isbn}`);
export const updatePending = async (body: {books: Book[]}) => instance.put("/books/pending", body);
export const getPending = async () => instance.get<Book[]>("/books/pending");
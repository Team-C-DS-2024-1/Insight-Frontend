import instance from "./axios";

export const getAllBooks = async () => instance.get("/books");
export const getBookByTitle = async (title: string) => instance.get(`/books/title/${title}`);
export const getBookByIsbn = async (isbn: string) => instance.get(`/books/isbn/${isbn}`);
import instance from "./axios";

export const getAllBooks = async () => instance.get('/books');
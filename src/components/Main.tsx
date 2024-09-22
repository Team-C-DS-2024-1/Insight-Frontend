import React, { useState } from "react";
import { libros, Libro } from "../data/data";

class PendingStack {
  private stack: string[] = [];

  full() {
    return this.stack.length >= 10;
  }

  empty() {
    return this.stack.length == 0;
  }

  push(item: string) {
    this.stack.push(item);
  }

  topElement() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.stack.pop();
  }
}

const pendingStack = new PendingStack();

function Main() {
  const [category, setCategory] = useState<string>("");
  const [pending, setPending] = useState<string[]>([]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const addToPending = (book: Libro) => {
    if (pendingStack.full()) {
      alert("Pending stack is full!");
    } else {
      pendingStack.push(`<strong>Author:</strong> ${book.author} <br><strong>Title:</strong> ${book.title}`);
      setPending([...pending, pendingStack.topElement()]);
    }
  };

  const deleteFromPending = () => {
    if (pendingStack.empty()) {
      alert("Pending stack is empty!");
    } else {
      pendingStack.pop();
      setPending([...pending.slice(0, -1)]);
    }
  };

  const filteredBooks = libros.filter((b) => b.category === category);

  return (
    <div className="w-4/5 mx-auto flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-serif">Discover Books</h1>
        <blockquote className="italic mt-2">"If you don’t like to read, you haven’t found the right book." - J.K. Rowling</blockquote>
      </div>

      <select
        name="categoryBooks"
        id="categoryBooks"
        value={category}
        onChange={handleCategoryChange}
        className="border mt-4 p-2 rounded-md"
      >
        <option value="">-</option>
        <option value="Nonfiction">Nonfiction</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Fiction">Fiction</option>
      </select>

      <ul className="grid grid-cols-3 gap-8 mt-8 w-full">
        {filteredBooks.map((book) => (
          <li key={book.isbn} className="list-none">
            <div className="flex flex-col items-center justify-between h-20">
              <p className="text-center">Title: {book.title}</p>
              <button
                id={`addButton${book.isbn}`}
                onClick={() => addToPending(book)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
              >
                Add to pending
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-bold mt-10">Pending Books</h3>
      <ul className="text-center mt-4">
        {pending.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} className="mb-2"></li>
        ))}
      </ul>
      <button
        onClick={() => deleteFromPending()}
        className="bg-red-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-500"
      >
        Read / Delete
      </button>
    </div>
  );
}

export default Main;

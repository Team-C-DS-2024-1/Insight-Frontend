import { useEffect, useState } from "react";
import Book from "../interfaces/Book";import { getPending, updatePending } from "../api/BookApi";
import { Link } from "react-router-dom";
;

class PendingStack {
  private stack: string[] = [];

  full() {
    return this.stack.length >= 20;
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

interface BooksArr {
    books: Book[];
}

function BooksGrid(props: BooksArr) {

    const { books } = props;
    const [pending, setPending] = useState<string[]>([]);
    const [arr, setArr] = useState<Book[]>([]);

  const addToPending = (book: Book) => {
    if (pendingStack.full()) {
      alert("Pending stack is full!");
    } else {
      pendingStack.push(`<strong>Author:</strong> ${book.author} <br><strong>Title:</strong> ${book.title}`);
      updatePending({"books": [...arr, book]});
      setPending([...pending, pendingStack.topElement()]);
      setArr([...arr, book]);
    }
  };

  const deleteFromPending = () => {
    if (pendingStack.empty()) {
      alert("Pending stack is empty!");
    } else {
      pendingStack.pop();
      updatePending({"books": [...arr.slice(0,-1)]});
      setPending([...pending.slice(0, -1)]);
      setArr([...arr.slice(0,-1)]);
    }
  };

  useEffect(() => {
        const fetchPending = async () => {
            const res = await getPending();
            const currp: string[]  = [];
            const curra: Book[] = [];
            if(res){
                while(!pendingStack.empty()) pendingStack.pop();
                res.data.map(b => {
                    if (!pendingStack.full()) {
                        pendingStack.push(`<strong>Author:</strong> ${b.author} <br><strong>Title:</strong> ${b.title}`);
                        currp.push(`<strong>Author:</strong> ${b.author} <br><strong>Title:</strong> ${b.title}`);
                        curra.push(b);
                    }
                });
                
                setArr(curra);
                setPending(currp);
            }

        }

        fetchPending();
  }, []);


  return (
    <div className="w-4/5 mx-auto flex flex-col items-center justify-center">

      <ul className="grid grid-cols-3 gap-8 mt-8 w-full">
        {books.map((book) => (
          <li key={book.isbn} className="list-none">
            <div className="flex flex-col items-center justify-between h-20">
              <p className="text-center hover:cursor-pointer transition-[0.3s] hover:text-blue-500">
                Title: <Link to={`../books/${book.isbn}`} target="_blank">{book.title}</Link> 
                </p>
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

export default BooksGrid;
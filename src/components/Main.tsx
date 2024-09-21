import React, { useState } from "react";
import { libros, Libro } from "../data/data";

// Simulamos una pila pendiente
class PendingStack {
  private stack: string[] = [];
  
  full() {
    return this.stack.length >= 10; // Máximo de 10 elementos en la pila
  }

  empty(){
    return this.stack.length == 0;
  }

  push(item: string) {
    this.stack.push(item);
  }

  topElement() {
    return this.stack[this.stack.length - 1];
  }

  pop(){
    this.stack.pop();
  }
}

const pendingStack = new PendingStack();

function Main() {
  const [category, setCategory] = useState<string>("");
  const [pending, setPending] = useState<string[]>([]);

  // Función que maneja el cambio de categoría
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  // Función que maneja el agregar libro a la lista de pendientes
  const addToPending = (book: Libro) => {
    if (pendingStack.full()) {
      alert("Pending stack is full!"); // Muestra un mensaje de advertencia
    } else {
      pendingStack.push(`<strong>Author:</strong> ${book.author} <br><strong>Title:</strong> ${book.title}`);
      setPending([...pending, pendingStack.topElement()]); // Actualizamos la lista de pendientes
    }
  };

  const deleteFromPending = () => {
    if (pendingStack.empty()) {
      alert("Pending stack is empty!"); // Muestra un mensaje de advertencia
    } else {
      pendingStack.pop();
      setPending([...pending.slice(0,-1)]); // Actualizamos la lista de pendientes
    }
  };

  // Filtramos los libros por categoría seleccionada
  const filteredBooks = libros.filter(b => b.category === category);

  return (
    <div className="discoverBooks content">
      <div className="head">
        <h1>Discover Books</h1>
        <blockquote>"If you don’t like to read, you haven’t found the right book." - J.K. Rowling</blockquote>
      </div>
      
      {/* Select de categorías */}
      <select name="categoryBooks" id="categoryBooks" value={category} onChange={handleCategoryChange}>
        <option value="">-</option>
        <option value="Nonfiction">Nonfiction</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Fiction">Fiction</option>
      </select>
      
      <ul id="results">
        {/* Renderizamos los libros filtrados */}
        {filteredBooks.map((book) => (
          <li key={book.isbn}>
            <div className="filteredContent">
              <p>Title: {book.title}</p>
              <button id={`addButton${book.isbn}`} onClick={() => addToPending(book)}>
                Add to pending
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Mostramos los libros pendientes */}
      <h3>Pending Books</h3>
      <ul id="pending">
        {pending.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
      <button onClick={() => deleteFromPending()}> Read / Delete </button>
    </div>
  );
}

export default Main;

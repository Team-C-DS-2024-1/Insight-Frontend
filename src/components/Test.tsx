import { getAllBooks } from "../api/BookApi";
import { useState, useEffect } from "react";

function Test(){
    let bk: Array<any>;
    const[books, setBooks] = useState(null);
    useEffect(() => {
        const getBooks = async () => {
            const res = await getAllBooks();
            setBooks(res.data);
        }

        getBooks();

    }, []);

    if(!books){
        return <p>Loading...</p>;
    } else {
        bk = books;
    }

    return (
        <div>
            {bk.map((b) => {
                return (<p className="text-red-600">Title = {b.title}</p>);
            })}
        </div>
    );
}

export default Test;
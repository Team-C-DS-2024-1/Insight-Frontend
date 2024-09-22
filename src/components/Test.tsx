import { useState, useEffect } from "react";

import Nav from "./Nav";
import Browser from "./Browser";
import { getAllBooks } from "../api/BookApi";

function Test(){
    // let bk: Array<any>;
    // const[books, setBooks] = useState(null);
    // useEffect(() => {
    //     const getBooks = async () => {
    //         const res = await getAllBooks();
    //         setBooks(res.data);
    //     }

    //     getBooks();

    // }, []);

    // if(!books){
    //     return <p>Loading...</p>;
    // } else {
    //     bk = books;
    // }

    return (
        <div>
            <Nav/>
            <Browser setTitle={(a) => console.log(a)} setCategory={(a) => console.log(a)}/>
        </div>
    );
}

export default Test;
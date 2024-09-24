import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import Nav from "../components/Nav";
import Book from "../interfaces/Book";
import Browser from "../components/Browser";
import BooksGrid from "../components/BooksGrid";
import { getAllBooks, getBookByTitle, getBooksByCategory } from "../api/BookApi";

function DiscoverBooks(){
    const [filter, setFilter] = useState("Title");
    const [title, setTitle] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [books, setBooks] = useState<Book[] | null>(null);
    const [notFound, setNotFound] = useState(false);

    const loadContent = () => {
        if(notFound){
            return (
                <>
                    <p>{"No content found :("}</p>
                    <BooksGrid books={[]}/>
                </>
            );
        } else {
            if(!books){
                return (
                    <p>loading....</p>
                );
            } else {
                return <BooksGrid books={books}/>;
            }
        }
    }

    useEffect(() => {
        const fetchAll = async () => {
            const res = await getAllBooks();
            setBooks(res.data);
        }

        const fetchByTitle = async () => {
            if(title === null) {
                fetchAll();
            } else {
                try {
                    const res = await getBookByTitle(title);
                    setBooks([res.data]);
                    setNotFound(false);
                } catch (e) {
                    if(e instanceof AxiosError){
                        if(e.response?.status === 404){
                            setNotFound(true);
                        } else {
                            alert(e);
                        }
                    } else {
                        alert(e);
                    }
                }
            }
        }

        const fetchByCategory = async () => {
            if(category === null){
                fetchAll();
            } else {
                try {
                    const res = await getBooksByCategory(category);
                    setBooks(res.data);
                    setNotFound(false);
                } catch (e) {
                    if(e instanceof AxiosError){
                        if(e.response?.status === 404){
                            setNotFound(true);
                        } else {
                            alert(e);
                        }
                    } else {
                        alert(e);
                    }
                }
            }
        }

        if(filter === "Title"){
            fetchByTitle();
        } else if (filter === "Category") {
            fetchByCategory();
        } else {
            fetchAll();
        }

    }, [title, category]);

    return(
        <>  
            <Nav/>
            <Browser setTitle={(t) => setTitle(t)} setCategory={(c) => setCategory(c)} setFilter={(f) => setFilter(f)}/>
            <div className="text-center">
                {loadContent()}
            </div>
        </>
    );
}

export default DiscoverBooks;
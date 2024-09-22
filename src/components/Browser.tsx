import { useState } from "react";


type CallbackFunction = (x:string) => void;
interface props {
    setTitle: CallbackFunction;
    setCategory: CallbackFunction;
    setFilter: CallbackFunction;
}

/**
 * Props are two callback functions meant to update the title and the category
 */

function Browser(callbacks: props){
    const options = ["Title", "Category"];
    const [option, setOption] = useState(options[0]);
    const [currT, setCurrT] = useState("");
    const { setTitle, setCategory, setFilter } = callbacks;

    const loadSearch = () => {
        if(option == options[0]){
            return (
                <div className="w-[300px] relative">
                    <input type="text" className="border-[1px] border-black rounded-[15px] px-2 w-[300px] h-[25px]" placeholder="Book title..." onChange={(e)=> setCurrT(e.target.value)}></input>
                    <button className="absolute right-[5px] hover:cursor-pointer" onClick={() => setTitle(currT)}>&#x1F50E;&#xFE0E;</button>
                </div>
            );
        } else {
            return (
                <select className="border-[1px] border-black rounded-[15px] px-2 w-[300px] h-[25px] invalid::text-gray-400" onChange={(e) => setCategory(e.target.value)}>
                    <option value="." disabled={true} selected={true} hidden={true}>Category...</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Horror">Horror</option>
                    <option value="Nonfiction">Nonfiction</option>
                    <option value="Fantasy">Fantasy</option>
                </select>
            );
        }
    };
    
    return(
        <div>
            <div className="text-center px-5">
                <h1 className="text-3xl font-Cormorant">Discover Books</h1>
                <blockquote className="text-sm text-black italic text-opacity-50">"If you don’t like to read, you haven’t found the right book." - J.K. Rowling</blockquote>
            </div>
            <div className="text-center">
                <h3 className="text-xl my-4 font-Cormorant">Search by:</h3>
                <div className="flex px-[100px] mx-[550px]">
                    {options.map((o,i) => {
                        return (
                        <div className={`${options[i] == option ? "bg-[#C7C7C7]" : ""} mx-7 w-[100px] h-[23px] rounded-md text-center`}>
                            <span className="hover:cursor-pointer" onClick={() => {
                                setOption(o);
                                setFilter(o);
                            }}>{o}</span>
                        </div>
                        );
                    })}
                </div>
            </div>
                    
            <div className="my-5 mx-[615px]">
                {loadSearch()}
            </div>
        </div>
    );
}
export default Browser;
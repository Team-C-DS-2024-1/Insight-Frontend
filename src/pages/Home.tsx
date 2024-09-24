import { Link } from "react-router-dom";

import libro from "../img/icons8-lectura-100.png";
import Nav from "../components/Nav";

function Home(){
    return(
        <>
        <Nav/>
        <div className="flex justify-center items-center w-[100vw] mx-[50px]">
            <div className="flex flex-col ">
                
                <div className="">
                <h1 className="text-[#126A9C] font-Cormorant font-bold text-4xl mx-[170px]">Welcome Reader!</h1>
                    <p className="text-xl text-black font-raleway mt-5"><span className="font-Cormorant font-bold text-4xl text-[#126A9C]">Insight</span> helps you to find you next favourite book...</p>
                    <img src={libro} className="w-[180px] h-[180px] mx-[200px]"/>
                </div>
                <div className="text-start">
                    <h3 className="text-3xl text-[#126A9C] font-Cormorant font-bold">It's quite simple!</h3>
                    <ol className="list-decimal mx-[80px]">
                        <li><span className="text-xl text-black font-raleway">Go to <Link to={"/discover"}><span className="hover:cursor-pointer transition-[0.3s] hover:text-blue-500">/discover</span></Link> and search among the available books.</span></li>
                        <li><span className="text-xl text-black font-raleway">Click on the book’s title to see a more detailed view.</span></li>
                        <li><span className="text-xl text-black font-raleway">Add the book to your pending list.</span></li>
                    </ol>
                </div>
            </div>
        </div>
        

        </>
    );
}

export default Home;
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="text-center h-[80px] w-[100vw] border-2 border-gray py-5 sticky mb-[30px] top-0 bg-white">
            <h1 className="text-4xl text-[#126A9C] font-Cormorant font-bold "><Link to={"/"}>Insight</Link></h1>
        </div>
    );
}

export default Nav;
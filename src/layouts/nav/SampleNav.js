import { Link } from "react-router-dom";

const SampleNav = () => {
    return ( 
        <div className="flex items-center justify-center mb-3 p-4 text-blue-600 font-extrabold">
            <div className="m-4 text-4xl underline ">
                <Link to="/">Main</Link>
            </div>
            <div className="m-4 text-4xl underline ">
                <Link to="/about">About</Link>
            </div>
            <div className="m-4 text-4xl underline ">
                <Link to="/board/list">Board</Link>
            </div>
        </div>
     );
}
 
export default SampleNav;
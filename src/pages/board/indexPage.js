import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
        <div className="t-4 p-4 bg-white flex items-center justify-center">
            <div className="m-4 p-2 underline ">
                <Link to="list">List</Link></div>
            <div className="m-4 p-2 underline ">Register</div>
        </div>
        <div className="h-[70vh] bg-white w-full">
            <Outlet></Outlet>
        </div>
        </BasicLayout>
     );
}
 
export default IndexPage;
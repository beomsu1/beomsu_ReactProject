import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
        <div className="flex mt-4 p-4 bg-rose-300">
            <div className="m-4 p-2 underline ">List</div>
            <div className="m-4 p-2 underline ">Register</div>
        </div>
        <div className="h-[70vh] bg-purple-300 w-full">
            <Outlet></Outlet>
        </div>
        </BasicLayout>
     );
}
 
export default IndexPage;
import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <div className="mx-auto min-w-[1280px] bg-[#99ccff]">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div>
                {children}
            </div>
        </div>
     );
}
 
export default BasicLayout;
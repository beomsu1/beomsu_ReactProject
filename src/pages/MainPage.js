import BasicLayout from "../layouts/BasicLayout";
import image from '../image/p5.png';

const MainPage = () => {
    return (
        <>
            <BasicLayout>
            </BasicLayout>
            <div className=" flex items-center justify-center">
                <img src={image} />
            </div>
        </>

    );
}

export default MainPage;
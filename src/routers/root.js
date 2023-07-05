import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";

const router = createBrowserRouter([
    // {} -> 하나의 객체
    {
        path : "",
        element: <MainPage></MainPage>
    },
    {
        path : "about",
        element: <AboutPage></AboutPage>
    },
    {
        path : "board",
        // element: <div>Board</div>,
        // children은 배열
        children: [
            {
                path : "list",
                element: <ListPage></ListPage>
            }
        ]
    }
])

export default router;
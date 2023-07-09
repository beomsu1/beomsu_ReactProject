import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import { Suspense, lazy } from "react";
import LoadingPage from "../pages/Loading";

// 비동기 로딩
const loading = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/indexPage"))
const Board_List = lazy(()=> import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))

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
        // 개발할 떄는 항상 지연로딩을 이용해서 개발하기
        // 로딩중에는 <loadingPage>를 띄울거고 성고하면 indexPage로 보내줄거다
        element: <Suspense fallback={loading}><Board_Index/></Suspense>,
        // children은 배열
        children: [
            {
                path : "list",
                element: <Suspense fallback={loading}><Board_List/></Suspense>
            },
            {
                path : "read/:bno",
                element : <Suspense fallback={loading}><Board_Read/></Suspense>
            }
        ]
    }
])

export default router;
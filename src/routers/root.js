import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import { Suspense, lazy } from "react";
import LoadingPage from "../pages/Loading";
import KakaoRedirectPage from "../pages/member/KakaoRedirectPage";

// 비동기 로딩
const loading = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/indexPage"))
const Board_List = lazy(()=> import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))

const Products_Index = lazy(() => import("../pages/products/indexPage"))
const Products_List = lazy(() => import("../pages/products/ListPage"))
const Products_Register = lazy(() => import("../pages/products/RegisterPage"))
const Products_Read = lazy(() => import("../pages/products/ReadPage"))
const Products_Modify = lazy(() => import("../pages/products/ModifyPage"))

const Member_Login = lazy(() => import("../pages/member/LoginPage"))

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
    },
    {
        path : "products",
        // 개발할 떄는 항상 지연로딩을 이용해서 개발하기
        // 로딩중에는 <loadingPage>를 띄울거고 성고하면 indexPage로 보내줄거다
        element: <Suspense fallback={loading}><Products_Index/></Suspense>,
        // children은 배열
        children: [
            {
                path : "list",
                element: <Suspense fallback={loading}><Products_List/></Suspense>
            },
            {
                path : "register",
                element: <Suspense fallback={loading}><Products_Register/></Suspense>
            },
            {
                path : "read/:pno",
                element : <Suspense fallback={loading}><Products_Read/></Suspense>
            },
            {
                path : "modify/:pno",
                element: <Suspense fallback={loading}><Products_Modify/></Suspense>
            }
            
        ]
    },
    {
        path : "member/login",
        element: <Suspense fallback={loading}><Member_Login/></Suspense>
    },
    {
        path : "member/kakao",
        element : <KakaoRedirectPage></KakaoRedirectPage>
    }
])

export default router;
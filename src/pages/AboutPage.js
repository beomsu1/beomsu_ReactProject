import { useSelector } from "react-redux";
import CountButton from "../components/counter/CountButton";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useCustomLogin from "../hooks/useCustomLogin";

const AboutPage = () => {

    const {loginInfo} = useCustomLogin()

    // LoginPage로 보내버리기
    const moveLoginPage = () => {
        Navigate(`/member/login`)
    }


    return (
        <BasicLayout>
            <div>AboutPage</div>

            <CountDisplay></CountDisplay>
            <CountButton></CountButton>


            <TodoList></TodoList>
            <TodoInput></TodoInput>
        </BasicLayout>
    );
}

export default AboutPage;
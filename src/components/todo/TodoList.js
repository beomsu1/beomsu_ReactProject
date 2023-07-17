import { useSelector } from "react-redux";

const TodoList = () => {

    // state.todo는 배열 그래서 map 사용가능
    const obj = useSelector(state => state.todo)

    console.log(obj)


    return ( 
        <div>
            <ul>
                {obj.map( ( ele , idx) => <li key={idx}>{ele}</li>)}
            </ul>
        </div>
     );
}
 
export default TodoList;
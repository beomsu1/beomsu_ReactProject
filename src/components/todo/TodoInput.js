import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoSlice";

const TodoInput = () => {

    const [text , setText] = useState('')

    const dispatch = useDispatch()

    const handleClickSave = () => {

        dispatch(addTodo(text))
    }


    return ( 
        <div>
            Todo Input <br></br>
            <input className="m-2 p-2 border-2" type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={handleClickSave}>Save</button>
        </div>
     );
}
 
export default TodoInput;
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch= useDispatch();

    const clickHandler = (id) => {
        console.log("delete",id);
        dispatch(deleteTodo(id));
    };

    const doneHandler = (id) =>{
        console.log("done", id);
        dispatch(markAsDone(id));
    
    }

    return(
        <>
        <AddForm/>
        <h2 style={{ color: 'blue' }}>Todo List App</h2>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id} style={todo.isDone? {textDecorationLine: "line-through"} : {}}>{todo.task}
                <button onClick={()=> clickHandler(todo.id)}>Delete</button>
                <button onClick={()=> doneHandler(todo.id)}>Done</button>
                </li>
                
            ))}
        </ul>
        </>
    );
}
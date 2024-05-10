import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:"abc",task:"demo-task",isDone:false}],
  };

  export const todoSlice= createSlice({
    name: "todo",
    initialState,
    reducers: {   //state,action
        addTodo: (state,action)=>{
            const newTodo={
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);   //direct mutation in redux.... but in normal react we do destructure like [...todos,newTodo]..
        }, 
        deleteTodo: (state, action)=>{
            //action.payload
            state.todos= state.todos.filter((todo)=>todo.id != action.payload)
        },
        markAsDone: (state, action)=>{
            state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone=true;
                }
            });
        },
    },
  })

// Action creators are generated for each case reducer function
  export const {addTodo, deleteTodo, markAsDone}= todoSlice.actions;
  export default todoSlice.reducer;
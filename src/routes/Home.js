import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addToDo, deleteToDo} from "../store";
import {Link} from "react-router-dom";


const Home = ()=> {
    const[text, setText] = useState();
    function onChange(e) {
        setText(e.target.value);
    }

    const toDo = useSelector(state => state);

    const dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault();
        dispatch(addToDo(text));
        setText("");
    }

    const btnOnClick = (e) => {
        const targetId = parseInt(e.target.parentNode.id);
        dispatch(deleteToDo(targetId));
    };

    return <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text || ""} onChange={onChange}/>
            <button>Add</button>
        </form>
        <ul>
            {toDo.map((state)=>(
                <li key={state.id} id={state.id} >
                    <Link to={`${state.id}`}>{state.text}</Link>
                    <button onClick={btnOnClick}>❌</button>
                </li>
            ))}
        </ul>
    </>
}

export default Home;
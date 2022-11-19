import {legacy_createStore} from "redux"
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
    return {
        type: ADD_TODO,
        text
    };
};

const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        id
    }
}

const reducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE_TODO:
            return state.filter(toDo => toDo.id !== action.id);
            /*필터를 이용해서 컨디션(조건)을 넣어서 일치하는 리터럴만 배열에 남게한다.
              즉 del버튼을 클릭한 리터럴만 사라지게 만든 것이다. */
        default:
            return state;
    }
}

const store = legacy_createStore(reducer);

store.subscribe(()=> console.log(store.getState()));

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e)=> {
    const id = parseInt(e.target.parentNode.id);
    //html에서 받아온 id는 스트링이기 때문에
    store.dispatch(deleteToDo(id));
}

const paintToDos = ()=> {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
};

store.subscribe(paintToDos);

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
import {configureStore, createSlice} from "@reduxjs/toolkit";

//export const addToDo = createAction("ADD");
//export const deleteToDo = createAction("DELETE");
/*
//createReducer를 사용하기 전.

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            //console.log(state,action);
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            //console.log(action);
            return state.filter(toDo => toDo.id !== action.payload);
            //Home.js에서 dispatch(deleteToDo(text))로 넣은 text가 payload(key)의 value로 반환된다.
            //리덕스 툴킷을 사용했기 때문에 모든 값을 payload로 반환하게 된거다.
        default:
            return state;
    }
}
*/
/*
const reducer = createReducer([],{
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state,action) =>
        state.filter(toDo => toDo.id !== action.payload)
    //return 해준 이유 (중괄호안에 넣지 않으면 바로 리턴됨. 그래서 반드시 한줄로 적어야함)
    //filter를 사용해서 새로운 배열을 리턴했기 때문이다.


    //createReducer에는 두가지 선택이 가능하다. 하나는 스테이트를 mutate(기존에서 변경만)하는 것과
    //새로운 것을 리턴하거나 인데 사실 mutate는 존재하지 않고 위에서처럼
    //return [{ text: action.payload, id: Date.now() }, ...state]; 를 실행해줬을 뿐이다.
    //이건 immer라고 하고 보여지는것과 다르게 코드가 작동한다.
    // (보여지는건 mutate, 뒤에서 기능하는 것은 return { text: action.payload, id: Date.now() } )
});
 */

const toDos = createSlice({
    name:'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state,action) =>
            state.filter(toDo => toDo.id !== action.payload)
    }
});

const store = configureStore({reducer:toDos.reducer});
//크롬에서 DevTools를 사용하기 위한 것이며 원형은 legacy_createStore(reducer); 이다.

export const { add, remove } = toDos.actions;

export default store;
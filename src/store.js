import {configureStore, createSlice} from "@reduxjs/toolkit";

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
//toDos에서 reducers에 접근하려면 toDos.reducer 해야한다. reducers하면 안된다.

//크롬에서 DevTools를 사용하기 위한 것이며 원형은 legacy_createStore(reducer); 이다.

export const { add, remove } = toDos.actions;

export default store;
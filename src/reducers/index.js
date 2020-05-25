import {combineReducers} from 'redux';

import {visibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions/constants/action-types';
const {SHOW_ALL} = visibilityFilters;

function visibilityFilter(state=SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
    return action.filter
    default: return state;
  }
}

function todos(state =[{text: 'complete todo app with redux', completed: false},{text: 'implement Redux', completed: true}], action){
  switch(action.type){
    case ADD_TODO:
    return[
      ...state,
        {
          text: action.text,
          completed: false
        }
    ]
    case TOGGLE_TODO:
    return state.map((todo, index)=>{
        if(index === action.index){
          return{
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })

    case DELETE_TODO:
    return state.filter((todo, index) => index !== action.index)
    default: return state;
  }
}



const reducer = combineReducers({
  visibilityFilter,
  todos
})

export default reducer

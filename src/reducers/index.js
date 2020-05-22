import {visibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions/constants/action-types';

import {combineReducer} from 'redux';

const {SHOW_ALL} = visibilityFilters;





function todo(state =[], action){
  switch(action.type){
    case ADD_TODO:
    return{
      ...state,
      todos: [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]
    }
    case TOGGLE_TODO:
    return{
      ...state,
      todos: state.todos.map((todo, index)=>{
        if(index === action.index){
          return{
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    }
    case DELETE_TODO:
    return{
      ...state,
      todos: state.todos.filter((index) => index => action.index)
    }
    default: return state;
  }
}

function visibilityFilter(state=SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
    return action.filter
    default: return state;
  }
}

const reducer = combineReducer({
  visibilityFilter,
  todo
})

export default reducer

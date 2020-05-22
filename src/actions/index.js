import {ADD_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from './constants/action-types';

export function addTodo(text){
  return{
    type: ADD_TODO,
    text
  }
}

export function deleteTodo(index){
  return{
    type: DELETE_TODO,
    index
  }
}

export function toggleTodo(index){
  return{
    type: TOGGLE_TODO,
    index
  }
}

export function setVisibilityFilter(filter){
  return{
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

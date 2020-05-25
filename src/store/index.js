import {createStore} from 'redux';
import reducer from '../reducers';
//import {addTodo, deleteTodo, toggleTodo, setVisibilityFilter} from '../actions'
//import {visibilityFilters} from '../actions/constants/action-types';

const store = createStore(reducer, window.STATE_FROM_SERVER);

export default store;

//console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

//store.dispatch(addTodo('working'));
//store.dispatch(addTodo('now'));
//store.dispatch(toggleTodo(1))

//store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED))

//store.dispatch(deleteTodo(0))
//store.dispatch(deleteTodo(1))
//store.dispatch(addTodo('reduxified'));
//store.dispatch(addTodo('test'));
//store.dispatch(deleteTodo(2));


unsubscribe()

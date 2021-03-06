import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//test
import {fetchListItems, createListItem, deleteListItem} from './actions/list_actions';
import {logout} from './actions/session_actions'

window.fetchItems = fetchListItems;
window.createItem = createListItem;
window.deleteItem = deleteListItem;
window.logout = logout;


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: { currentUser: window.currentUser },
    };
    //delete window.currentUser;
  }

  store = configureStore(preloadedState);

  window.getState = store.getState;  
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store }/>, root);
});
import { createStore } from 'redux'; // cria o estado global

import rootReducer from './reducers';

const store = createStore(rootReducer)

export default store
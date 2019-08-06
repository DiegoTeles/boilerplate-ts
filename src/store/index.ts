import { createStore } from 'redux';

import rootReducer from './duck/rootReducer';

const store = createStore(rootReducer);

export default store;
 
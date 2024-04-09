import { createStore } from 'redux';
import noticeReducer from './reducers/noticeReducer';

const store = createStore(noticeReducer);

export default store;

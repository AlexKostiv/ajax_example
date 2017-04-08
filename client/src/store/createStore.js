/**
 * Created by IlyaLitvinov on 07.04.17.
 */
import { createStore } from 'redux';
import todoApp from '../reducer/reducer';

let store = createStore(todoApp);

export default store;
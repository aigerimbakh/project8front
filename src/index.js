import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store'; // Импортируем хранилище
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Импортируем serviceWorkerRegistration

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register(); // Регистрируем сервисного работника

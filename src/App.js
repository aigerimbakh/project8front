import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

const NoticeForm = React.lazy(() => import('./components/NoticeForm'));
const NoticeList = React.lazy(() => import('./components/NoticeList'));

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="heading">Gg news</h1>
        <React.Suspense fallback={<div>Loading...</div>}>
          <NoticeForm />
          <NoticeList />
        </React.Suspense>
      </div>
    </Provider>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import App from './App';
import './index.css';
import { initRouter } from './initRouter';

const router = initRouter();

router.start(() =>
  ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  ),
);

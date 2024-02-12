import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

const rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Router>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </Router>
    </React.StrictMode>
  );
}

rerender(store.getState())

store.subscribe(rerender)

reportWebVitals();

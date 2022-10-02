import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CookiesProvider} from "react-cookie";

export default function App() {
  return (
    <RoutesPages/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);


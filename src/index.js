import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {CookiesProvider} from "react-cookie";
import { RoutesPages } from './pages/RoutesPages';


export default function App() {
  return (
    <RoutesPages/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


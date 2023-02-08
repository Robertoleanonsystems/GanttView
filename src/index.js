import { StrictMode } from "react";
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from "./App";
import "gantt-task-react/dist/index.css";

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

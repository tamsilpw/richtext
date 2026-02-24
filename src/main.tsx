import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestEngine from './TestEngine.tsx'
import TestEngineWindow from './TestEngineWindow.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test-engine" element={<TestEngine />} />
      <Route path="/test-engine-window" element={<TestEngineWindow />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)

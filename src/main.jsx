import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calculadora, ApiClima, NavBar } from "./components/index.js"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <NavBar />
        <div className="container mt-4">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/calculadora" element={<Calculadora />} />
                <Route path="/apiclima" element={<ApiClima />} />
            </Routes>
        </div>
    </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import css from './index.css?inline'

// shadow domを作る
const div = document.createElement("div")
document.body.appendChild(div)
const shadowRoot = div.attachShadow({mode: 'open'})
const inner = document.createElement("div")
shadowRoot.appendChild(inner)

ReactDOM.createRoot(inner).render(
  <React.StrictMode>
    <div id="root">
    <App />
    <style>{css}</style>
    </div>
  </React.StrictMode>,
)

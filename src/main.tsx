import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import css from './index.css?inline'
import { ContainerContext } from './ContainerProvider.tsx'

// shadow domを作る
const div = document.createElement("div")
document.body.appendChild(div)
const shadowRoot = div.attachShadow({mode: 'open'})
const inner = document.createElement("div")
shadowRoot.appendChild(inner)

ReactDOM.createRoot(inner).render(
  <React.StrictMode>
    <ContainerContext.Provider value={inner}>
      <div id="root">
      <App />
      <style>{css}</style>
      </div>
    </ContainerContext.Provider>
  </React.StrictMode>,
)

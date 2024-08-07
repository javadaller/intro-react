import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import './sass/style.scss'

import { addTodo } from './ts/addTodo'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
)

const button: HTMLInputElement = document.querySelector('#addButton')!
    button.addEventListener('click', () => {
        addTodo()
})
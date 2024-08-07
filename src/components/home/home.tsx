import { useEffect } from 'react'
import './home.scss'
import { addTodo } from '../../ts/addTodo'

function Home() {

  useEffect(() => {
    const button = document.querySelector('#addButton') as HTMLInputElement
    if (button) {
      button.addEventListener('click', addTodo)
    }

    // Clean up event listener when component unmounts
    return () => {
      if (button) {
        button.removeEventListener('click', addTodo)
      }
    }
  }, [])

  return (
    <>
      <section id="home">
        <input type="text" name="input" id="inputID" />
        <input type="button" id="addButton" value="Add" />
        <h2>Todos</h2>
        <div id="todoList"></div>
      </section>
    </>
  )
}

export default Home

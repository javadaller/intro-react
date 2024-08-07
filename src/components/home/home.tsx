import './home.scss'

function Home() {

  return (
    <>
    <section id="home">

        <input type="text" name="input" id="inputID" />
        <input type="button" id="addButton" value="Add"/>

        <h2>Todos</h2>
        <div id="todoList"></div>

    </section>
    </>
  )
}

export default Home
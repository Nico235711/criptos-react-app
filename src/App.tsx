import Form from "./components/Form"

const App = () => {

  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>
        <div className="content">
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
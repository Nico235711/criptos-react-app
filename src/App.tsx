import { useEffect } from "react";
import Form from "./components/Form"
import { useCriptoStore } from "./store"

const App = () => {

  const { fetchCriptos } = useCriptoStore()

  useEffect(() => {
    fetchCriptos()
  }, []);

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
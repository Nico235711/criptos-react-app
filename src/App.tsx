import { useEffect } from "react";
import Form from "./components/Form"
import { useCriptoStore } from "./store"
import CryptoDetail from "./components/CryptoDetail";
import Spinner from "./components/Spinner";

const App = () => {

  const { loading, fetchCriptos } = useCriptoStore()

  useEffect(() => {
    fetchCriptos()
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>
        <div className="content">
          <Form />
          {loading && <Spinner />}
          <CryptoDetail />
        </div>
      </div>
    </>
  )
}

export default App
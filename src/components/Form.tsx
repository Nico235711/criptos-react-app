import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCriptoStore } from "../store"
import { Pair } from "../types"
import Alert from "./Alert"

const initialState = {
  currency: "",
  cryptoCurrency: ""
}

const Form = () => {
  const [pair, setPair] = useState<Pair>(initialState)
  const [alert, setAlert] = useState("")
  const { crytoscurrencies } = useCriptoStore()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values(pair).includes("")) {
      setAlert("Todos los campos son obligatorios")
      return
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          value={pair.currency}
          onChange={handleChange}
        >
          <option value="">-- Seleccione una Moneda --</option>
          {currencies.map(currency => (
            <option value={currency.code} key={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptoCurrency">Criptomoneda:</label>
        <select
          name="cryptoCurrency"
          id="cryptoCurrency"
          value={pair.cryptoCurrency}
          onChange={handleChange}
        >
          <option value="">-- Seleccione Criptomoneda --</option>
          {crytoscurrencies.map(cryptoCurrency => (
            <option value={cryptoCurrency.CoinInfo.Name} key={cryptoCurrency.CoinInfo.Name}>{cryptoCurrency.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  )
}

export default Form
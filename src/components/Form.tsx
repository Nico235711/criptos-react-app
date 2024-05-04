import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCriptoStore } from "../store"
import { Pair } from "../types"

const Form = () => {
  const [pair, setPair] = useState<Pair>({
    currency: "",
    cryptoCurrency: ""
  })
  const { crytoscurrencies } = useCriptoStore()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

  }

  return (
    <form className="form" onChange={handleSubmit}>
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">-- Seleccione una Moneda --</option>
          {currencies.map(currency => (
            <option value={currency.code} key={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency" onChange={handleChange}>
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
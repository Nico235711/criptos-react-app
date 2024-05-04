import { currencies } from "../data"
import { useCriptoStore } from "../store"

const Form = () => {

  const { crytoscurrencies } = useCriptoStore()

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">-- Seleccione una Moneda --</option>
          {currencies.map(currency => (
            <option value={currency.code} key={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency">
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
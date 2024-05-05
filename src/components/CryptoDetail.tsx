import { useMemo } from "react"
import { useCriptoStore } from "../store"

const CryptoDetail = () => {

  const { cryptoData } = useCriptoStore()
  const { CHANGEPCT24HOUR, HIGHDAY, IMAGEURL, LASTUPDATE, LOWDAY, PRICE } = cryptoData
  const hasCryptoData = useMemo(() => !Object.values(cryptoData).includes(""), [cryptoData])

  return (
    <>
      {hasCryptoData &&
        (
          <div className="container-flex">
            <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen crypto" />
            <div>
              <p>Precio: <span>{PRICE}</span></p>
              <p>Precio más bajo del día: <span>{LOWDAY}</span></p>
              <p>Precio más alto del día: <span>{HIGHDAY}</span></p>
              <p>Variación en la ult. 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
              <p>Ult. Actualización: <span>{LASTUPDATE}</span></p>
            </div>
          </div>
      )}
    </>
  )
}

export default CryptoDetail
import { ReactNode } from "react"

type AlertProps = {
  children: ReactNode
}

const Alert = ({ children }: AlertProps) => {

  return (
    <p className="alert">{children}</p>
  )
}

export default Alert
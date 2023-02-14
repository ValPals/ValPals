import { FC } from "react"
import { CardProps } from "../interfaces"

const Card: FC<CardProps> = ({ children }:CardProps) => {
  return (
    <div className="card-panel">
      { children }
    </div>
  )
}

export default Card;
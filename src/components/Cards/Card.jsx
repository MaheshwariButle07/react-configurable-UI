import "./Card.css"
import { Link } from "react-router-dom"
import { theme, themeBorder } from "../../../data"

const Card = ({ id, image, title, price, delivery, rating, reviews }) => {
  return (
    <Link to={`/cardpage/${id}`} >
      <div style={{backgroundColor: theme.blue , border:themeBorder.blue}} className="card-container">
      <img src={image} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <div className="card-flex">
        <div className="card-pd">
          <p className="card-price">{price}</p>
          <p>{delivery}</p>
        </div>

        <div className="card-rr">
          <p className="card-rating">{rating}</p>
          <p>{reviews}</p>
        </div>
      </div>
      </div>





    </Link>
  )
}

export default Card
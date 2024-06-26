import "./CardPages.css"
import { useParams } from "react-router-dom"
import cardData, { theme } from "../../../data"


function CardPages() {

  const { id } = useParams()

  const selectedId = cardData.find((dataObject) => dataObject.id === id)

  return (
    <>

      <div className="card-page-container">
        <div className="image-container">
          <img src={selectedId.image} className="page-image" />
        </div>

        <div className="card-info">
          <p style={{backgroundColor:theme.gray,}} className="card-title">{selectedId.title}</p>
          <p className="ap-card-rating">{selectedId.rating}</p>
          <p className="card-price">{selectedId.price}</p>
          <h3 style={{backgroundColor:theme.blue}}>{selectedId.heading1}</h3>
          <ul  className="card-description">
            <li >{selectedId.description.productDetails.CakeFlavour}</li>
            <li>{selectedId.description.productDetails.Shape}</li>
            <li>{selectedId.description.productDetails.Weight}</li>
            <li>{selectedId.description.productDetails.NetQuantity}</li>
            <li>{selectedId.description.productDetails.Diameter}</li>
            <li>{selectedId.description.productDetails.CountryOfOrigin}</li>
            <li>{selectedId.description.productDetails.Serves}</li>
          </ul>
          <h3 style={{backgroundColor:theme.blue}}>{selectedId.heading2}</h3>
          <p className="card-delivery-info">{selectedId.deliveryInformation}</p>
        </div>
      </div>



    </>
  )
}

export default CardPages
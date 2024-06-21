import "./Home.css"
import cardData from "../../../data"
import Card from "../../components/Cards/Card.jsx"
import Navbar from "../../components/Navbar/Navbar.jsx"


function Home() {
  return (
    <>
      <Navbar />      

      <div className="home-cards-container">
        {
          cardData.map((cardobject, i) => {
            const {
              id,
              image,
              title,
              price,
              delivery,
              rating,
              reviews,
              description,
              deliveryInformation,
              heading1,
              heading2

            } = cardobject

            return (
              <>

                <Card
                  key={i}
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  delivery={delivery}
                  rating={rating}
                  reviews={reviews}
                  description={description}
                  deliveryInformation={deliveryInformation}
                  heading1={heading1}
                  heading2={heading2}
                />

              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
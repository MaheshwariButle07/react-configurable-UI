import "./AboutCardPage.css"
import { AboutCardData } from "../../../data"
import { useParams } from "react-router-dom"

function AboutCardPage() {

  const{id}=useParams()
  const selectedId=AboutCardData.find((aboutfoodcardobj,i)=>aboutfoodcardobj.id===id)
  return (
    <>
    <div className="acp-card-container">
        <img src={selectedId.image} className="acp-card-image" />
        <span className="acp-title">{selectedId.title}</span>
      </div>

      <div className="acp-info-container">
        <div>
          <h1>{selectedId.heading1}</h1>
          <p className="acp-info-paragraph">{selectedId.description1}</p>
        </div>

        <div>
          <h1>{selectedId.heading2}</h1>
          <p className="acp-info-paragraph">{selectedId.description2}</p>
        </div>
        <div>
          <h1>{selectedId.heading3}</h1>
          <p className="acp-info-paragraph">{selectedId.description3}</p>
        </div>

      </div>
    </>
  )
}

export default AboutCardPage
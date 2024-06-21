import "./AboutCard.css"
import {Link} from "react-router-dom" 
import { theme, themeBorder } from "../../../data"


function AboutCard({id,title,image}) {
  return ( 
    <>
    <Link to={`/aboutcardpage/${id}`}>
      <div style={{backgroundColor: theme.blue , border:themeBorder.blue}} className="about-card-container">
        <img src={image} className="card-image"/>
        <span className="title">{title}</span>
    </div>
    </Link>
    </>
  )
}

export default AboutCard
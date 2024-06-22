import "./About.css"
import { AboutCardData } from "../../../data"
import AboutCard from "./../../components/AboutCard/AboutCard.jsx"
import Navbar from "../../components/Navbar/Navbar.jsx"



function About() {
    return (
        <>

        <Navbar />
           
            <h2 className="about-heading">Food Services We Provide.</h2>

            <div className="cards-conatiner">
                {
                    AboutCardData.map((aboutfoodobj, i) => {
                        const {
                            id,
                            image,
                            title
                        } = aboutfoodobj

                        return (<AboutCard
                            key={i}
                            id={id}
                            image={image}
                            title={title}
                        />)
                    })
                }
            </div>

        </>
    )
}

export default About
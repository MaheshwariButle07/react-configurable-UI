import "./Navbar.css"
import { SiteDetails } from "../../../data"

const Navbar = () => {
    return(
        <>
        <div className="nav-container">

        {SiteDetails.showFeatures ? <h3 className="shop-name">{SiteDetails.siteName}</h3>
        : null}
        <a href="/" className="nav-item">Home</a>
        <a href="/about" className="nav-item">About</a>
        <a href="/services" className="nav-item">Serivces</a>
    
        </div>
        </>
    )
}

export default Navbar
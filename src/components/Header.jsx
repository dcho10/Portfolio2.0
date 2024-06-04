import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar"

export default function Header() {
    return (
        <Navbar
            links={[
                <Link key={1} className="link" to="/about"> 
                About 
                </Link>,
                <Link key={2} className="link" to="/projects"> 
                Projects 
                </Link>,
                <Link key={3} className="link" to="/resume"> 
                Resume 
                </Link>,
                <Link key={4} className="link" to="/contact"> 
                Contact 
                </Link>
                
            ]}
        />
    )
}
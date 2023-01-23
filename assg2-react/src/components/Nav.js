import colorlogo from '../images/valorant_logo.png'
import whitelogo from '../images/white_logo.png'
const Nav = ({minimal, authToken}) => {

    return (
        <nav>
            <div className = "logo-container">
                <img className="logo" src={minimal ? colorlogo : whitelogo}/>
            </div>

            {!authToken && !minimal && <button className="nav-button"> Log in </button>}
        </nav>
    )
}

export default Nav
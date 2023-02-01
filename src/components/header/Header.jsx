import { faBed, faCar, faEarthAmericas, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="headerList">
                <div className="headerItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stay</span>
                </div>
                <div className="headerItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flight</span>
                </div>
                <div className="headerItem">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <span>Flight + Hotel</span>
                </div>
                <div className="headerItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rental</span>
                </div>
                <div className="headerItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxi</span>
                </div>
            </div>
        </div>
    );
}

export default Header;

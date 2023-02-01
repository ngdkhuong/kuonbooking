import { faBed, faCar, faEarthAmericas, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headerList.css';

function HeaderList() {
    return (
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stay</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flight</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faEarthAmericas} />
                <span>Flight + Hotel</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rental</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxi</span>
            </div>
        </div>
    );
}

export default HeaderList;

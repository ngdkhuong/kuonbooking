// hooks
import { useState } from 'react';

// library
import { faBed, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

// file from directory
import './search.css';

function Search() {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    return (
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder="Where you want to go?" className="headerSearchInput" />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span className="headerSearchText">{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                    date[0].endDate,
                    'MM/dd/yyyy',
                )}`}</span>
                <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faUser} className="headerIcon" />
                <span className="headerSearchText">2 adults 0 children 1 room</span>
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn">Find</button>
            </div>
        </div>
    );
}

export default Search;

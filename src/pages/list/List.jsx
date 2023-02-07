import './list.css';
import Navbar from './../../components/navbar/Navbar';
import Header from './../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="listItem">
                            <label>Destination</label>
                            <input type="text" />
                        </div>
                        <div className="listItem">
                            <label>Check-in Date</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    );
};

export default List;

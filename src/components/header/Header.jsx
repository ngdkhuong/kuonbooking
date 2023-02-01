//  import hooks

// import library
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

// import file in directory
import './header.css';
import HeaderList from './headerList/HeaderList';
import Search from './search/Search';

function Header() {
    return (
        <div className="header">
            <div className="headerContainer">
                <HeaderList />
                <h1 className="headerTitle">Find your next accommodation</h1>
                <p className="headerDesc">Find hotel deals, home stays and more...</p>
                <button className="headerBtn">Sign in / Register</button>
                <Search />
            </div>
        </div>
    );
}

export default Header;

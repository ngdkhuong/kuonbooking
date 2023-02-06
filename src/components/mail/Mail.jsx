import './mail.css';

const Mail = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time and money!</h1>
            <span className="mailDesc">Sign up and we'll send you the best deals</span>
            <div className="signUpMail">
                <input type="text" placeholder="Your email address" className="mailInput" />
                <button className="mailButton">Register</button>
            </div>
        </div>
    );
};

export default Mail;

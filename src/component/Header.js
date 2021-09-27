import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header className="header">
            <h1 className="logo">
                <Link to="/">🍊Study</Link>
            </h1>
            <div className="util">
                <Link to="/create_skill" className="utilLink">➕ Skill</Link>
                <Link to="" className="utilLink">➕ Study</Link>
            </div>
        </header>
    );
}
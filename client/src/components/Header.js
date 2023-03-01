import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/budget">Budget</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <h1>Budget Tracker</h1>
            <h2>coming soon!</h2>
        </header>
    );
}
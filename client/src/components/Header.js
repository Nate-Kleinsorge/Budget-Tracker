import { Link } from 'react-router-dom';
import { useAuth } from 'utils/auth.js';

export default function Header () {
    const {user, handleLogout} = useAuth();
    return (
        <header>
            <nav className="p-2 flex navbar navbar-expand-lg navbar-light bg-transparent">
                    <h1>Budget Tracker</h1>
                <div className="flex-row-reverse collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className='nav-link text-black'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className='nav-link text-black'>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/budget" className='nav-link text-black'>Budget</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link to="/create-acc" className='nav-link text-black'>Create Account</Link>
                        </li>
                        <li>
                            {user ? (
                            <button onClick={handleLogout}>Logout</button>) : (
                                <Link to="/login" className="text-black">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
            <h2>{user ? `Welcome, ${user.email}!`: ""}</h2>
        </header>
    );
}
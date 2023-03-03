import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header>
            <nav class="p-2 flex navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="h1 text-white">
                    <h3>Budget Tracker</h3>
                </div>
                <div class="flex-row-reverse collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/budget" className='nav-link'>Budget</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" className='nav-link'>login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
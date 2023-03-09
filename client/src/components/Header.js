import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header>
            <nav class="p-2 flex navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="h1 text-black">
                    <h3>Budget Tracker</h3>
                </div>
                <div class="flex-row-reverse collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active" >
                            <Link to="/" className='nav-link text-black'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard" className='nav-link text-black'>Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/budget" className='nav-link text-black'>Budget</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" className='nav-link text-black'>login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
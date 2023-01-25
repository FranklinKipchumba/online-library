export default function NavBar(){
    return(
        <nav className="nav">
            <a href="/" className="site-title">
                CHAMPIONS LIBRARY
            </a>
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/Books">Books</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/Sign-in">Sign in</a>
                </li>
            </ul>
        </nav>
    )
}
co
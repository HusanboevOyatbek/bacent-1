import "./header.css"

function Header(){
    return(
        <header>
            <div className="containet navbar">
                <a className="logo" href=""> Clarity</a>

                <ul className="menu">
                    <li className="lilar">
                        <a href="">Home</a>
                    </li>

                    <li>
                        <a href="">About</a>
                    </li>

                    <li>
                        <a href="">Services</a>
                    </li>

                    <li>
                        <a href="">Portfolio</a>
                    </li>

                    <li>
                        <a href="">Team</a>
                    </li>

                    <li>
                        <a href="">Dropdown</a>
                    </li>


                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>

                <button className="get_btn">
                    Get Started
                </button>
            </div>
        </header>
    )
}

export default Header
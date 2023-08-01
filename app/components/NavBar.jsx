import "../styles/navbar.scss"
import Logo from "../assets/profile.png"
import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="top-nav">
                <p>LOG IN</p>
                <p>SIGN UP</p>
                <p>EXPLORE</p>
                <p>DISCOUNT</p>
            </div>
            <nav>
                <div className="left">
                    {/* <div className="logo-wrap">
                        <img src={Logo} alt="" />
                    </div> */}
                    <Link href="/" ><h1>NOVAORBIT</h1></Link>
                </div>
                <ul className="left-category">
                        <li>Kategori</li>
                    </ul>
                <div className="center">
                    <div className="input-wrap">
                        <input type="search" name="cariapa" placeholder="Cari apa ?" />
                    </div>
                    <button>
                        <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="right-category">
                <i className="fa-regular fa-cart-shopping"></i>
                    <i className="fa-regular fa-message"></i>
                    <i className="fa-regular fa-envelope"></i>
                </div>
                <span className="line">
                    
                </span>
                <div className="right">
                    <div className="shop-wrap">
                        <div className="shop">
                        <i className="fa-duotone fa-shop"></i>  
                        </div>
                        <p className="username">Toko</p>
                    </div>
                    <div className="profile-wrap">
                        <div className="profile-img">
                            <Image src={Logo} alt="logo" />    
                        </div>
                        <p className="username">Doni</p>
                    </div>


                </div>
            </nav>

        </div>
    )
}

export default NavBar
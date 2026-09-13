import logo from "./assets/logo-text.png";
import menu from "./assets/hamburger.png";


const Nav = () => {
    const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];
    return (
        <div className="container mx-auto">
            <nav className="bg-white border-b sticky top-0 z-50">
                <div className="flex items-center justify-between px-8 py-4">

                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Dev Stack Logo" />
                    </div>

                    <ul className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link} className="text-gray-600 hover:text-pink-600 cursor-pointer">
                                {link}
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-gray-700 font-medium">Sign In</button>
                        <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium">
                            Sign Up
                        </button>
                    </div>

                    <input type="checkbox" id="menu-toggle" className="peer hidden" />

                    <label htmlFor="menu-toggle" className="md:hidden text-2xl cursor-pointer">
                        <img src={menu} alt="Dev Stack Logo" />
                    </label>

                    <ul className="hidden peer-checked:flex md:hidden flex-col gap-4 px-8 pb-4 absolute top-full left-0 w-full bg-white border-b">
                        {navLinks.map((link) => (
                            <li key={link} className="text-gray-600 hover:text-pink-600 cursor-pointer">
                                {link}
                            </li>
                        ))}
                        <button className="text-gray-700 font-medium text-left">Sign In</button>
                        <button className="bg-gradient-to- from-pink-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium">
                            Sign Up
                        </button>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Nav;
import { BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import logo from "./assets/logo-text.png";
import { FaFacebook } from "react-icons/fa";


function Footer() {
    const productLinks = ["Technologies", "Projects", "Pricing", "Roadmap"];
    const companyLinks = ["About", "Careers", "Blog", "Contact"];
    const legalLinks = ["Privacy Policy", "Terms of Service"];

    return (
        <footer className="bg-gray-50 border-t px-8 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                     <div className="flex items-center gap-2">
                        <img src={logo} alt="Dev Stack Logo" />
                    </div>

                    <p className="text-gray-600 mt-4 text-sm">
                        Explore, compare, and build the development stack that fits your
                        next project.
                    </p>

                    <div className="flex gap-4 mt-4 text-gray-600">
                        <a href="#"><FaFacebook size={20} /></a>
                        <a href="#"><BsTwitter size={20} /></a>
                        <a href="#"><LiaLinkedin size={20} /></a>
                    </div>
                </div>

                {/* Product links */}
                <div>
                    <h2 className="font-semibold mb-4">Product</h2>
                    <ul className="space-y-2">
                        {productLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-600 hover:text-pink-600 text-sm">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company links */}
                <div>
                    <h2 className="font-semibold mb-4">Company</h2>
                    <ul className="space-y-2">
                        {companyLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-600 hover:text-pink-600 text-sm">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal links */}
                <div>
                    <h2 className="font-semibold mb-4">Legal</h2>
                    <ul className="space-y-2">
                        {legalLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-600 hover:text-pink-600 text-sm">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-pink-600">Privacy</a>
                    <a href="#" className="hover:text-pink-600">Terms</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
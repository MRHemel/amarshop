

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#96ecb4] text-base-content">
                <div>
                    <a className="btn btn-ghost normal-case text-3xl font-extrabold bg-gradient-to-r from-indigo-700 from-10% via-sky-700 via-30% to-emerald-700 to-90% text-transparent bg-clip-text">AmarShop</a>
                    <p>Amar Shop Industries Ltd.<br />Providing reliable products since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-icons">
                    <a id="whatsapp" href="https://api.whatsapp.com/send?phone=918139006116&amp;text=Hello%20Ebin%20%F0%9F%91%8B" target="_blank" rel="noreferrer" alt="whatsapp">
                        <i className="fa fa-whatsapp  footer-i"></i>
                    </a>
                    <a href="https://github.com/EbinJS" target="_blank" rel="noreferrer" alt="github">
                        <i className="fa fa-github footer-i"></i>
                    </a>
                    <a href="https://www.instagram.com/ebinj.s/" target="_blank" rel="noreferrer" alt="instagram">
                        <i className="fa fa-instagram footer-i"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100008949277691" target="_blank" rel="noreferrer" alt="facebook">
                        <i className="fa fa-facebook footer-i"></i>
                    </a>
                    <a href="https://in.linkedin.com/in/ebinjs" target="_blank" rel="noreferrer" alt="linkedin">
                        <i className="fa fa-linkedin footer-i"></i>
                    </a>
                    <a href="https://telegram.me/Ebinjs" target="_blank" rel="noreferrer" alt="telegram">
                        <i className="fa fa-telegram footer-i"></i>
                    </a>
                </div>
                <hr />
                <p>Made with ❤️ by Ebin JS</p>
                <p className="copyright">© 2021 Ebin JS</p>
            </footer>
        </div>
    )
}

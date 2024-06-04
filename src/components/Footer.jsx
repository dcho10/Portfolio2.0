export default function Footer() {
    return (
        <footer className="footer-section">
                <section className="footer-links">
                    <section className="icon-links">
                        <h6> Links </h6>
                        <button type="button"><a href="https://github.com/dcho10"><i className="fa fa-github github-logo"></i></a></button>
                        <button type="button"><a href="https://github.com/dcho10"><i className="fa fa-linkedin linkedin-logo"></i></a></button>                
                    </section>
                    <section className="links">
                        <h6> View </h6>
                        <a href="/about"> About </a>
                        <a href="/projects"> Projects </a>
                        <a href="/resume"> Resume </a>
                    </section>
                </section>
                <p> Made with React </p>
        </footer>
    )
}
export default function Navbar({ links }) {
    return (
        <>
        <section className="header">
            <a href="/" className="title"> David Cho </a>
            <section className="header-links">
                <ul>
                    {links.map((link) => link)}
                </ul>
            </section>
        </section>
        </>
    )
}
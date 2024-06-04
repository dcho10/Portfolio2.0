export default function AboutMe({ about }) {
    return (
        <section className="about">
            <h1 className="about-title fadeIn">About Me</h1>
            <ul>
                {about.map((aboutItem, index) => (
                    <li
                        key={index}
                        className="about-list slideRight"
                        style={{ animationDelay: `${index * 1}s` }}
                    >
                        {aboutItem}
                    </li>
                ))}
            </ul>
        </section>
    );
}

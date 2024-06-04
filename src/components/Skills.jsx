export default function Skills({ skills }) {
    return (
        <section className="skills">
            <h1 className="skills-title fadeIn">Skills Include</h1>
            <section className="skills-container">
                {skills.map((skill, index) => (
                    <section key={index} className="skills-box" style={{ animationDelay: `${index * 0.375}s` }}>
                        <h2>{skill.title}</h2>
                        <ul>
                            {skill.items.map((item, idx) => (
                                <li key={idx} className="skills-list slideRight" style={{ animationDelay: `${idx * 1}s` }}> {item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </section>
        </section>
    );
}

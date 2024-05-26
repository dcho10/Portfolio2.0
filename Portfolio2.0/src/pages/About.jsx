import avatar from "/assets/avatar-photo.png";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import data from "../data/about.json"

export default function About() {
    const about = data.about;
    const skills = data.skills;

    return (
        <section className="about-container">
            <section className="avatar">
                <img src={avatar} alt="avatar photo" className="avatar-photo" />
            </section>

            <section className="about-page">
                <AboutMe about={about} />
                <Skills skills={skills} />
            </section>
        </section>
    );
}

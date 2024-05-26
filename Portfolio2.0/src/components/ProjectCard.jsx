import projects from "../data/projects.json";

export default function ProjectCard() {

    const project = {projects}

    return (
        <>
        <h1 className="project-title"> My Projects </h1>
        <section className="project-container">
            {projects.map((project, index) => (
                <section key={index} className="project-box">
                    <h3>
                        <a href={`${project.link}`} target="_blank"> {project.title} </a>
                    </h3>
                        <a href={`${project.link}`} target="_blank"> <img src={project.imageName} alt={project.title} className="project-img" /> </a>
                        
                    <section className="project-description">
                        <a href={`https://github.com/dcho10/${project.url}`} target="_blank"> {project.title} on GitHub </a>
                        <p> {project.description} </p>
                        <h4> Made With: </h4>
                        <ul>
                            {project.madeWith.map((made, idx) => (
                                <li key={idx} className="project-tag"> {made} </li>
                            ))}
                        </ul>
                    </section>
                </section>
            ))}
        </section>
        </>
    )
}
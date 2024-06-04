import resumeInfo from "../data/resume.json"

export default function Resume() {
    const resume = {resumeInfo};

    return (
        <>
        <section className="resume-card">
            {resumeInfo.map((job) => (
                <section key={job.id} className="resume-container">       
                    <section className="resume-title">
                        <h5> {job.title} </h5>
                        <p> {job.organization} </p>
                        <p> {job.year} </p>
                    </section>
                    <section className="job-description">
                        <ul>
                            {job.description.map((desc, idx) => (
                                <li key={idx}> {desc} </li>
                            ))}
                        </ul>
                    </section>
                </section>    
            ))}
            <section>
                <h1> Click <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:810223ef-35a3-4fd2-8cb5-a57ebae54d38"> here </a> to view the full resume </h1>
            </section>
        </section>
        </>
    )
}
import { Button } from "./Button.jsx";
import "../styles/Modal.css";

function Modal ({ details, skills, experience, education, modalDisplay }) {
    function closeModal (event) {
        const dialog = event.target.parentNode;
        dialog.close();
        modalDisplay(false);
    }

    const skillsList = skills.map((skill) => {
        return (
            <li key = {skill.id}>
                <h4>{skill.name}</h4>
                <p>{skill.desc}</p>
            </li>
        );
    });

    const experienceList = experience.map((exp) => {
        return (
            <li key = {exp.id}>
                <div className = "modal-experience-header">
                    <h4>{exp.name}</h4>
                    <p>{exp.start} - {exp.end}</p>
                </div>
                <p>{exp.desc}</p>
            </li>
        );
    });

    const educationList = education.map((edu) => {
        return (
            <li key = {edu.id}>
                <div className = "modal-education-header">
                    <h4>{edu.name}</h4>
                    <p>{edu.graduated}</p>
                </div>
                <p>{edu.degree}</p>
            </li>
        );
    });

    return (
        <dialog>
            <section className = "modal-personal-details">
                <h3>{details["user-name"]}</h3>
                <p>{`${details["user-mail"]} | ${details["user-phone"]} | ${details["user-website"]}`}</p>
            </section>

            <section className = "modal-skills">
                <h3>Skills</h3>
                <ul>
                    {skillsList}
                </ul>
            </section>

            <section className = "modal-experience">
                <h3>Experience</h3>
                <ul>
                    {experienceList}
                </ul>
            </section>

            <section className = "modal-education">
                <h3>Education</h3>
                <ul>
                    {educationList}
                </ul>
            </section>

            <Button className = "edit-button" text = "Edit Submission" onClick = {closeModal} />
        </dialog>
    );
}

export { Modal };
import { useState } from "react";
import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx";
import { Skills } from "./Skills.jsx";
import { Experience } from "./Experience.jsx";
import { Education } from "./Education.jsx";
import { Modal } from "./Modal.jsx";
import "../styles/Form.css";

function Form () {
    const [personalDetails, setPersonalDetails] = useState({});
    const [skills, setSkills] = useState([
        {
            id: self.crypto.randomUUID(),
            name: "",
            desc: ""
        }
    ]);
    const [experience, setExperience] = useState([
        {
            id: self.crypto.randomUUID(),
            name: "",
            desc: "",
            start: "",
            end: ""
        }
    ]);
    const [education, setEducation] = useState([
        {
            id: self.crypto.randomUUID(),
            name: "",
            desc: "",
            graduated: ""
        }
    ]);

    function onDetailsChange (event) {
        setPersonalDetails({...personalDetails, [event.target.name]: event.target.value});    
    }

    function addSkill () {
        setSkills([...skills, {
            id: self.crypto.randomUUID(),
            name: "",
            desc: ""
        }]);
    }

    function deleteSkill (id) {
        setSkills(skills.filter((skill) => skill.id !== id));
    }
    
    function onSkillChange (id, field, value) {
        setSkills(skills.map(skill => {
            if (skill.id !== id) return {...skill};
            return {...skill, [field]: value};
        }));
    }

    function addExperience () {
        setExperience([...experience, {
            id: self.crypto.randomUUID(),
            name: "",
            desc: "",
            start: "",
            end: ""
        }]);
    }

    function deleteExperience (id) {
        setExperience(experience.filter(exp => exp.id !== id));
    }

    function onExperienceChange (id, field, value) {
        setExperience(experience.map(exp => {
            if (exp.id !== id) return {...exp};
            return {...exp, [field]: value};
        }));
    }

    function addEducation () {
        setEducation([...education, {
            id: self.crypto.randomUUID(),
            name: "",
            desc: "",
            graduated: ""
        }]);
    }

    function deleteEducation (id) {
        setEducation(education.filter(edu => edu.id !== id));
    }

    function onEducationChange (id, field, value) {
        setEducation(education.map(edu => {
            if (edu.id !== id) return {...edu};
            return {...edu, [field]: value};
        }));
    }

    function onFormSubmit (event) {
        event.preventDefault();
        console.log("Form submitted.");
    }
    
    return (
        <section id = "create-cv">
            <h2>Create Your CV</h2>
            <form>
                <section className = "personal-details">
                    <h3>Personal Details</h3>

                    <ul>
                        <li><Input label = "Name: " id = "full-name" name = "user-name" placeholder = "John Doe" onChange = {onDetailsChange} /></li>
                        <li><Input type = "email" label = "Email: " id = "mail" name = "user-mail" placeholder = "John@gmail.com" onChange = {onDetailsChange} /></li>
                        <li><Input type = "tel" label = "Contact Number: " id = "number" name = "user-phone" placeholder = "123-456-7890" onChange = {onDetailsChange} /></li>
                        <li><Input label = "Website: " id = "website" name = "user-website" placeholder = "github.com/name" onChange = {onDetailsChange} /></li>
                    </ul>
                </section>

                <section className = "personal-skills">
                    <h3>Skills</h3>
                    <Button className = "add-field-button" text = "Add Skill" onClick = {addSkill} />

                    <Skills skills = {skills} deleteSkill = {deleteSkill} onSkillChange = {onSkillChange} />
                </section>

                <section className = "personal-experience">
                    <h3>Experience</h3>
                    <Button className = "add-field-button" text = "Add Experience" onClick = {addExperience} />

                    <Experience experience = {experience} deleteExperience = {deleteExperience} onExperienceChange = {onExperienceChange} />
                </section>

                <section className = "personal-education">
                    <h3>Education</h3>
                    <Button className = "add-field-button" text = "Add Education" onClick = {addEducation} />

                    <Education education = {education} deleteEducation = {deleteEducation} onEducationChange = {onEducationChange} />
                </section>

                <section className = "form-buttons">
                    <Button className = "submit-button" text = "Submit" type = "submit" onClick = {onFormSubmit} />
                    <Button className = "reset-button" text = "Reset" type = "reset" />
                </section>
            </form>
        </section>
    );
}

export { Form };
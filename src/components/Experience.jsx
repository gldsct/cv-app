import { Input } from "./Input.jsx";
import { Button } from "./Button.jsx";
import { TextArea } from "./Textarea.jsx";
import { getOrdinal } from "../utils/Ordinal.jsx";

function Experience ({ experience, deleteExperience, onExperienceChange }) {  
    const experienceList = experience.map((exp, index) => {
        const indexOrdinal = getOrdinal(index);
        return (
            <li key = {exp.id}>
                <Input label = {indexOrdinal[0].toUpperCase() + indexOrdinal.slice(1) + " Experience: "} id = {indexOrdinal + "-experience-name"} name = {indexOrdinal + "-experience-name"} onChange = {(event) => onExperienceChange(exp.id, "name", event.target.value)} />
                <TextArea label = {"Description of " + indexOrdinal[0].toUpperCase() + indexOrdinal.slice(1) + " Experience: "} id = {indexOrdinal + "-experience-desc"} name = {indexOrdinal + "-experience-desc"} onChange = {(event) => onExperienceChange(exp.id, "desc", event.target.value)} />
                <Input type = "month" label = "Start Date: " id = {indexOrdinal + "-experience-start"} name = {indexOrdinal + "-experience-start"} onChange = {(event) => onExperienceChange(exp.id, "start", event.target.value)} />
                <Input type = "month" label = "End Date: " id = {indexOrdinal + "-experience-end"} name = {indexOrdinal + "-experience-end"} onChange = {(event) => onExperienceChange(exp.id, "end", event.target.value)} />
                <Button className = "delete-field-button" text = "Delete Experience" onClick = {() => deleteExperience(exp.id)} />
            </li>
        );
    });

    return (
        <ul>
            {experienceList}
        </ul>
    );
}

export { Experience };
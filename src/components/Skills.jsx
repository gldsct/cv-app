import { Input } from "./Input.jsx";
import { Button } from "./Button.jsx";
import { TextArea } from "./Textarea.jsx";
import { getOrdinal } from "../utils/Ordinal.jsx";

function Skills ({ skills, deleteSkill, onSkillChange }) {
    const skillsList = skills.map((skill, index) => {
        const indexOrdinal = getOrdinal(index);
        return (
            <li key = {skill.id}>
                <Input label = {indexOrdinal[0].toUpperCase() + indexOrdinal.slice(1) + " Skill: "} id = {indexOrdinal + "-skill-name"} name = {indexOrdinal + "-skill-name"} onChange = {(event) => onSkillChange(skill.id, "name", event.target.value)} />
                <TextArea label = {"Description of " + indexOrdinal[0].toUpperCase() + indexOrdinal.slice(1) + " Skill: "} id = {indexOrdinal + "-skill-desc"} name = {indexOrdinal + "-skill-desc"} onChange = {(event) => onSkillChange(skill.id, "desc", event.target.value)} />
                <Button className = "delete-field-button" text = "Delete Skill" onClick = {() => deleteSkill(skill.id)} />
            </li>
        );
    });

    return (
        <ul>
            {skillsList}
        </ul>
    );
}

export { Skills };
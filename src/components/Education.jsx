import { Input } from "./Input.jsx";
import { Button } from "./Button.jsx";
import { getOrdinal } from "../utils/Ordinal.jsx";

function Education ({ education, deleteEducation, onEducationChange }) {  
    const educationList = education.map((edu, index) => {
        const indexOrdinal = getOrdinal(index);
        return (
            <li key = {edu.id}>
                <Input label = {indexOrdinal[0].toUpperCase() + indexOrdinal.slice(1) + " School: "} id = {indexOrdinal + "-school-name"} name = {indexOrdinal + "-school-name"} onChange = {(event) => onEducationChange(edu.id, "name", event.target.value)} />
                <Input label = {indexOrdinal[0].toUpperCase() + indexOrdinal.slice(1) + " Degree: "} id = {indexOrdinal + "-school-degree"} name = {indexOrdinal + "-school-degree"} onChange = {(event) => onEducationChange(edu.id, "degree", event.target.value)} />
                <Input type = "month" label = "Graduated: " id = {indexOrdinal + "-school-graduation"} name = {indexOrdinal + "-school-graduation"} onChange = {(event) => onEducationChange(edu.id, "graduated", event.target.value)} />
                <Button className = "delete-field-button" text = "Delete Education" onClick = {() => deleteEducation(edu.id)} />
            </li>
        );
    });

    return (
        <ul>
            {educationList}
        </ul>
    );
}

export { Education };
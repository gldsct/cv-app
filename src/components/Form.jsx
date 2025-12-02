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

    function onDetailsChange (event) {
        setPersonalDetails({...personalDetails, [event.target.name]: event.target.value});    
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
            </form>
        </section>
    );
}

export { Form };
import { Button } from "./Button";
import "../styles/Header.css";

const navListItems = [
    {
        id: self.crypto.randomUUID(),
        name: "Home",
        reference: "#"
    },
    {
        id: self.crypto.randomUUID(),
        name: "Create",
        reference: "#create"
    },
    {
        id: self.crypto.randomUUID(),
        name: "About",
        reference: "#about"
    },
];

function Header ({ label }) {
    return (
        <header>
            <h1>CV<span className = "header-span">App</span></h1>
            <nav aria-label = {label} className = "main-nav">
                <ul>
                    {navListItems.map((item) => {
                            return (
                                <li key = {item.id} className = "nav-item">
                                    <a href = {item.reference}>
                                        {item.name}
                                    </a>
                                </li>
                            );
                        }
                    )}
                </ul>
            </nav>
            <Button className = "header-button" text = "Contact" type = "button" />
        </header>
    );
}

export { Header };
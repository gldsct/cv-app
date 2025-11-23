import "../styles/Hero.css";

function Hero () {
    return (
        <section id = "hero">
            <h2 className = "hero-header">
                Craft Impressive<br/>
                CVs That<br/>
                Land You Jobs
            </h2>
            <p className = "hero-text">Whether you are a <span className = "hero-emphasized-text">student</span> or a <span className = "hero-emphasized-text">seasoned pro</span>, we help you <span className = "hero-emphasized-text">create CVs</span> that <span className = "hero-emphasized-text">impress</span> employers in a competitive job market.</p>
        </section>
    );
}

export { Hero };
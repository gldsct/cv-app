function Button ({ className, text, type = "button" }) {
    return (
        <button 
            className = {className}
            type = {type} 
        >
            {text}
        </button>
    );
}

export { Button };
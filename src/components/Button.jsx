function Button ({ className, text, type = "button", onClick }) {
    return (
        <button 
            className = {className}
            type = {type}
            onClick = {onClick} 
        >
            {text}
        </button>
    );
}

export { Button };
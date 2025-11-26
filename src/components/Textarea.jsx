function TextArea ({ id, name, label, placeholder, value, onChange }) {
    return (
        <p>
            <label htmlFor = {id}>{label}</label>
            <textarea id = {id} name = {name} placeholder = {placeholder} value = {value} onChange = {onChange}/>
        </p>
    );
}

export { TextArea };
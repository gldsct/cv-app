function Input ({ type = "text", id, name, label, placeholder, value, onChange }) {
    return (
        <p>
            <label htmlFor = {id}>{label}</label>
            <input type = {type} id = {id} name = {name} placeholder = {placeholder} value = {value} onChange = {onChange}/>
        </p>
    );
}

export { Input };
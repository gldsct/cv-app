function getOrdinal (index) {
    const ordinals = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
    return ordinals[index] || `${index + 1}th`;
}

export { getOrdinal };
const capitalizeString = (value) => {
    let str = value.charAt(0).toUpperCase() + value.slice(1);
    return str;
}

module.exports = capitalizeString;
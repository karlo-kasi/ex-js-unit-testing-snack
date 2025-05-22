const getInitials = (string) => {

    const array = string.split(" ").filter((a) => a !== "")
    const nameComplete = `${array[0].charAt(0).toUpperCase()}${array[1].charAt(0).toUpperCase()}`
    return nameComplete
}

module.exports = {
    getInitials
}
const getInitials = (string) => {

    const array = string.split(" ").filter((a) => a !== "")
    const nameComplete = `${array[0].charAt(0).toUpperCase()}${array[1].charAt(0).toUpperCase()}`
    return nameComplete
}

const createSlug = (string) => {
    return string.toLowerCase()
}

const average = (array) => {
    const somma = array.reduce((acc, num) => acc + num, 0)
    const media = somma / array.length
    return media
}

module.exports = {
    getInitials,
    createSlug,
    average
}
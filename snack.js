const getInitials = (string) => {

    const array = string.split(" ").filter((a) => a !== "")
    const nameComplete = `${array[0].charAt(0).toUpperCase()}${array[1].charAt(0).toUpperCase()}`
    return nameComplete
}

const createSlug = (string) => {
    if (!string) {
        throw new Error("Titolo non valido")
    } else {
        return string.toLowerCase().split(" ").join("-")
    }

}


const average = (array) => {

    array.forEach((numero) => {
        if (isNaN(numero)) {
            throw new Error("Average vuole solo numeri");
        }
    })
    const somma = array.reduce((acc, num) => acc + num, 0)
    const media = somma / array.length
    return media
}

const isPalindrome = (string) => {

    const parolaInversa = string.toLowerCase().split("").reverse().join("")
    return parolaInversa === string.toLowerCase()
}

const findPostById = (users, id) => {
    if (id !== parseInt(id)) {
        throw new Error("Inserisci un ID valido")
    }
    return users.find((user) => user.id === id)

}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}
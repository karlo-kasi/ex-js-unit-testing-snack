
const { getInitials, createSlug } = require("./snack")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Andrea Giusti")).toBe("AG")
    expect(getInitials("andrea giusti")).toBe("AG")
    expect(getInitials("andrea  giusti")).toBe("AG")
})


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("ROMANZO")).toBe("romanzo")
    expect(createSlug("CIAO AMICO MIO COSA FAI")).toBe("ciao amico mio cosa fai")
})
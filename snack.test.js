
const { getInitials, createSlug, average } = require("./snack")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Andrea Giusti")).toBe("AG")
    expect(getInitials("andrea giusti")).toBe("AG")
    expect(getInitials("andrea  giusti")).toBe("AG")
})


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("ROMANZO")).toBe("romanzo")
    expect(createSlug("CIAO AMICO MIO COSA FAI")).toBe("ciao amico mio cosa fai")
})



test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 4, 6, 3, 7])).toBe(4.2)
    expect(average([1, 4])).toBe(2.5)
})

const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snack")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Andrea Giusti")).toBe("AG")
    expect(getInitials("andrea giusti")).toBe("AG")
    expect(getInitials("andrea  giusti")).toBe("AG")
})


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("ROMANZO")).toBe("romanzo")
    expect(createSlug("CIAO AMICO MIO COSA FAI")).toBe("ciao-amico-mio-cosa-fai")
})



test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 4, 6, 3, 7])).toBe(4.2)
    expect(average([1, 4])).toBe(2.5)
    expect(() => average([1, "ciao"])).toThrow()
})

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test")
})


test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Osso")).toBeTruthy()
    expect(isPalindrome("Osso")).toBeTruthy()

})

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("Titolo non valido")
    expect(() => createSlug(null)).toThrow("Titolo non valido")
})


const users = [
    { id: 1, title: "Mario", slug: "Gianni" },
    { id: 2, title: "Luca", slug: "Gianni" },
    { id: 3, title: "Mario", slug: "Gianni" },
    { id: 4, title: "Sofia", slug: "Gianni" }
]



test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(users, 3)).toEqual({ id: 3, title: "Mario", slug: "Gianni" })
    expect(() => findPostById(users, "3")).toThrow("Inserisci un ID valido")
})
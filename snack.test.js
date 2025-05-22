
const { getInitials } = require("./snack")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Andrea Giusti")).toBe("AG")
    expect(getInitials("andrea giusti")).toBe("AG")
    expect(getInitials("andrea  giusti")).toBe("AG")
})
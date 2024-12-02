ServerEvents.recipes(event => {
    event.shaped(
        'createlowheated:basic_burner',
        [
            "   ",
            "A A",
            "BAB"
        ],
        {
            "A": "create:andesite_alloy",
            "B": "tfc:metal/ingot/wrought_iron"
        }
    ).id("createlowheated:basic_burner")
})
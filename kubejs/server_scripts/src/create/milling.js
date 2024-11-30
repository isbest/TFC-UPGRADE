const GRAINS = [
    "barley",
    "maize",
    "oat",
    "rye",
    "rice",
    "wheat"
]

const GEM2POWDER = [
    { input: 'tfc:ore/ruby', output: "tfc:powder/ruby" },
    { input: 'tfc:ore/sapphire', output: "tfc:powder/sapphire" },
    { input: 'tfc:ore/topaz', output: "tfc:powder/topaz" },
    { input: 'tfc:ore/amethyst', output: "tfc:powder/amethyst" },
    { input: 'tfc:ore/diamond', output: "tfc:powder/diamond" },
    { input: 'tfc:ore/emerald', output: 'tfc:powder/emerald' },
    { input: 'tfc:ore/lapis_lazuli', output: 'tfc:powder/lapis_lazuli' },
    { input: 'tfc:ore/opal', output: 'tfc:powder/opal' },
    { input: 'tfc:ore/pyrite', output: 'tfc:powder/pyrite' },
    { input: 'tfc:gem/ruby', output: "tfc:powder/ruby" },
    { input: 'tfc:gem/sapphire', output: "tfc:powder/sapphire" },
    { input: 'tfc:gem/topaz', output: "tfc:powder/topaz" },
    { input: 'tfc:gem/amethyst', output: "tfc:powder/amethyst" },
    { input: 'tfc:gem/diamond', output: "tfc:powder/diamond" },
    { input: 'tfc:gem/emerald', output: 'tfc:powder/emerald' },
    { input: 'tfc:gem/lapis_lazuli', output: 'tfc:powder/lapis_lazuli' },
    { input: 'tfc:gem/opal', output: 'tfc:powder/opal' },
    { input: 'tfc:gem/pyrite', output: 'tfc:powder/pyrite' },
]

ServerEvents.recipes(event => {
    const { create } = event.recipes

    GRAINS.forEach(item => {
        create.milling(
            [
                `tfc:food/${item}_flour`,
                Item.of(`tfc:food/${item}_flour`).withChance(0.2)
            ],
            `tfc:food/${item}_grain`
        ).id(`kubejs:${item}_flour`)
    })

    GEM2POWDER.forEach(item => {
        let id = "kubejs:milling/" + item.output.replace(/:|\//g, '_') + "_" + item.input.replace(/:|\//g, '_');
        create.milling(
            [item.output, Item.of(item.output).withChance(0.2)],
            item.input
        ).id(id)
    })

})
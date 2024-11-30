// priority: 10
const GEM_POLISHING = [
    { input: 'tfc:ore/ruby', output: "tfc:gem/ruby" },
    { input: 'tfc:ore/sapphire', output: "tfc:gem/sapphire" },
    { input: 'tfc:ore/topaz', output: "tfc:gem/topaz" },
    { input: 'tfc:ore/amethyst', output: "tfc:gem/amethyst" },
    { input: 'tfc:ore/diamond', output: "tfc:gem/diamond" },
    { input: 'tfc:ore/emerald', output: 'tfc:gem/emerald' },
    { input: 'tfc:ore/lapis_lazuli', output: 'tfc:gem/lapis_lazuli' },
    { input: 'tfc:ore/opal', output: 'tfc:gem/opal' },
    { input: 'tfc:ore/pyrite', output: 'tfc:gem/pyrite' },
    // 玻璃磨制
    { input: 'minecraft:glass', output: 'tfc:empty_jar' }
]

ServerEvents.recipes(event => {
    GEM_POLISHING.forEach(item => {
        let id = "kubejs:polishing/" + item.output.replace(/:|\//g, '_') + "_" + item.input.replace(/:|\//g, '_');
        event.recipes.create.sandpaper_polishing(item.output, item.input).id(id)
    })
})
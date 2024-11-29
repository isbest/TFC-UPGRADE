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
    { input: 'tfc:ore/pyrite', output: 'tfc:gem/pyrite' }
]

ServerEvents.recipes(event => {
    // const { createmetallurgy } = 
    GEM_POLISHING.forEach(item => {
        event.recipes.create.sandpaper_polishing(item.output, item.input)
    })
})
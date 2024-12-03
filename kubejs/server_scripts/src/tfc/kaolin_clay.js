ServerEvents.recipes(event => {
    event.recipes.tfc.heating('tfc:kaolin_clay', 498)
        .resultItem('tfc:powder/kaolinite')
        .chance(0.8)
        .id('tfc:heating/kaolin_clay')
})
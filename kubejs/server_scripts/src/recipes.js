ServerEvents.recipes(event => {
    event.forEachRecipe({}, recipe => {
        if (recipe.getId().startsWith('tfc_ie_addon:arc_furnace/wrought_iron')) {
            // // tfc_ie_addon:arc_furnace/tetrahedrite
            JsonIO.write("./recipes/" + String(recipe.getId()).replace(/:|\//g, '_') + ".json", recipe.json)
        }
    })
})
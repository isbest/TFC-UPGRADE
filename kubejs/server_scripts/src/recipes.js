ServerEvents.recipes(event => {
    event.forEachRecipe({}, recipe => {
        if (recipe.getId().startsWith('createdieselgenerators:basin_fermenting/fermentable')) {
            // // tfc_ie_addon:arc_furnace/tetrahedrite
            JsonIO.write("./recipes/" + String(recipe.getId()).replace(/:|\//g, '_') + ".json", recipe.json)
        }
    })
})
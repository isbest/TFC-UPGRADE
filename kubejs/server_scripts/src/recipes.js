ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'immersiveengineering:generator_fuel' }, recipe => {
        // if (recipe.getId().startsWith('tfc:heating/kaolin_clay')) {
            // tfc_ie_addon:arc_furnace/tetrahedrite
            JsonIO.write("./recipes/" + String(recipe.getId()).replace(/:|\//g, '_') + ".json", recipe.json)
        // }
    })
})
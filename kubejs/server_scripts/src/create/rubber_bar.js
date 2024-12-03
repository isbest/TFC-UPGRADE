ServerEvents.recipes(event => {
    // 锻铁时代才能实用橡胶？
    event.recipes.create.mixing('32x afc:rubber_bar',
        [
            Fluid.of('afc:latex', 1000),
            'tfc:powder/sulfur'
        ]
    ).lowheated()
})
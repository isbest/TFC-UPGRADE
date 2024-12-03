ServerEvents.recipes(event => {
    event.recipes.afc.tree_tapping('afc:wood/log/hevea')
        .resultFluid(Fluid.of('afc:latex', 100))
        .temps(-50, 50)
        .requiresNaturalLog(true)
        .springOnly(false)
        .id('afc:tree_tapping/hevea_latex')
})
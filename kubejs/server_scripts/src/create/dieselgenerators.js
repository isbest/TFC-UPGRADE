// priority: 10
ServerEvents.recipes(event => {
    // 柴油引擎
    const CREATE_DIESELGENERATORS_RECIPES = [
        'createdieselgenerators:crafting/diesel_engine',
        'createdieselgenerators:crafting/large_diesel_engine',
    ]
    CREATE_DIESELGENERATORS_RECIPES.forEach(item => {
        event.replaceInput(
            { id: item },
            'minecraft:polished_blackstone_slab',
            '#forge:smooth_stone_slab'
        )
    })

    // 抽油机油泵配方
    event.replaceInput(
        { id: 'createdieselgenerators:crafting/pumpjack_hole' },
        'minecraft:chain',
        '#kubejs:chain'
    )

    // 木屑块
    event.replaceInput(
        { id: 'createdieselgenerators:crafting/chip_wood_block' },
        'createdieselgenerators:wood_chip',
        '#forge:dusts/wood'
    )

    // 木屑
    event.replaceInput(
        { id: 'createdieselgenerators:crafting/chip_wood_beam' },
        'createdieselgenerators:wood_chip',
        '#forge:dusts/wood'
    )

    // 木屑地板
    event.replaceInput(
        { id: 'immersiveengineering:crafting/sawdust' },
        'immersiveengineering:dust_wood',
        '#forge:dusts/wood'
    )
})
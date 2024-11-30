// 鞍山合金
const DISABLE_ANDESITE_ALLOY_RECIPES = [
    'create:splashing/gravel', // 水洗沙砾
    'minecraft:diorite', // 闪长岩
    'create:diorite_from_stone_types_diorite_stonecutting'
]

ServerEvents.tags('item', event => {
    event.add('kubejs:andesite_alloy_rock', [
        "tfc:rock/cobble/andesite",
        "tfc:rock/smooth/andesite",
        "tfc:rock/hardened/andesite",
        "tfc:rock/raw/andesite"
    ])
})

ServerEvents.recipes(event => {
    DISABLE_ANDESITE_ALLOY_RECIPES.forEach(item => {
        event.remove({ id: item })
    })

    // 安山岩+铁粒/锌粒 = 安山合金
    event.replaceInput(
        [
            { id: 'create:crafting/materials/andesite_alloy_from_zinc' },
            { id: 'create:crafting/materials/andesite_alloy' },
            { id: "create:mixing/andesite_alloy_from_zinc" },
            { id: "create:mixing/andesite_alloy" }
        ],
        'minecraft:andesite',
        '#kubejs:andesite_alloy_rock'
    )

    // 天然石 生产
    ORE_ROCK.forEach(item => {
        event.recipes.create.compacting(
            [`tfc:rock/raw/${item}`],
            [
                `4x tfc:rock/loose/${item}`,
                Fluid.of('minecraft:lava', 100)
            ]
        ).superheated()
    })

})
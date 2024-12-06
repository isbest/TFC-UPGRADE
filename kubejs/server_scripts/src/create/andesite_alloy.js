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

    // 岩石粉水洗 产量提高
    event.recipes.create.splashing(
        [
            Item.of('tfcorewashing:dirty_pile_copper').withChance(0.5),
            Item.of('tfcorewashing:dirty_pile_sphalerite').withChance(0.5),
            Item.of('tfcorewashing:dirty_pile_gold').withChance(0.25),
            Item.of('tfcorewashing:dirty_pile_silver').withChance(0.25),
            Item.of('tfcorewashing:pile_black_sand').withChance(0.25),
            Item.of('tfcorewashing:dirty_pile_cassiterite').withChance(0.25), // 锡
            Item.of('minecraft:flint').withChance(0.05),
        ],
        'tfcorewashing:rock_powder'
    )
        .processingTime(400)
        .id('tfcorewashing:rock_powder/splashing')

    // 空烈焰人燃烧室
    event.replaceInput(
        { id: "create:crafting/kinetics/empty_blaze_burner" },
        "minecraft:netherrack",
        "#forge:glass"
    )
})
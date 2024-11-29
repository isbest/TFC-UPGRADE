// priority: 10
ServerEvents.recipes(event => {
    // 磁铁块
    event.shaped(
        '2x create_new_age:magnetite_block',
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": "tfcorewashing:pellet_magnetite",
            "B": "tfc:metal/ingot/wrought_iron"
        }
    )
    event.shaped(
        '2x create_new_age:magnetite_block',
        [
            " A ",
            " B ",
            " A "
        ],
        {
            "A": "tfcorewashing:briquet_magnetite",
            "B": "tfc:metal/ingot/wrought_iron"
        }
    )

    // 红石磁铁 
    event.shaped(
        '2x create_new_age:redstone_magnet',
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": "tfcorewashing:pellet_magnetite",
            "B": "minecraft:redstone_block"
        })
        .id("create_new_age:shaped/redstone_magnet")

    event.shaped(
        '2x create_new_age:redstone_magnet',
        [
            " A ",
            " B ",
            " A "
        ],
        {
            "A": "tfcorewashing:briquet_magnetite",
            "B": "minecraft:redstone_block"
        }
    )

    // 充电铁锭
    event.custom({
        "type": "create_new_age:energising",
        "energy_needed": 1000,
        "ingredients": [
            {
                "item": "tfc:metal/ingot/wrought_iron"
            }
        ],
        "results": [
            {
                "item": "create_new_age:overcharged_iron"
            }
        ]
    }).id('create_new_age:energising/iron_ingot')
    // 充电金锭
    event.custom({
        "type": "create_new_age:energising",
        "energy_needed": 2000,
        "ingredients": [
            {
                "item": "tfc:metal/ingot/gold"
            }
        ],
        "results": [
            {
                "item": "create_new_age:overcharged_gold"
            }
        ]
    }).id('create_new_age:energising/gold_ingot')
    // 充电钻石
    event.custom({
        "type": "create_new_age:energising",
        "energy_needed": 2000,
        "ingredients": [
            {
                "item": "tfc:gem/diamond"
            }
        ],
        "results": [
            {
                "item": "create_new_age:overcharged_diamond"
            }
        ]
    }).id('create_new_age:energising/diamond')

    // 下届合金磁铁
    event.shaped(
        '2x create_new_age:netherite_magnet',
        [
            "ABA",
            "BBB",
            "CBC"
        ],
        {
            "A": "tfc:metal/ingot/red_steel",
            "B": "create_new_age:overcharged_diamond",
            "C": "tfc:metal/ingot/blue_steel"
        }
    ).id('create_new_age:shaped/netherite_magnet')

    // 热能泵
    event.replaceInput(
        { id: 'create_new_age:shaped/heat_pump' },
        'create_new_age:thorium',
        'create:mechanical_pump'
    )
    // 锅炉加热
    event.replaceInput(
        { input: 'create:empty_blaze_burner' },
        'create:empty_blaze_burner',
        'createlowheated:basic_burner'
    )
    // 碳刷,改为石墨
    event.replaceInput(
        { id: 'create_new_age:shaped/carbon_brushes' },
        'minecraft:coal',
        'tfc:powder/graphite'
    )
    // 反应堆玻璃
    event.replaceInput(
        { input: 'minecraft:glass' },
        'minecraft:glass',
        '#forge:glass'
    )

    event.remove({ id: 'create_new_age:thorium_multiplication' })
    event.remove({ id: 'create_new_age:thorium/thorium_crushing' })

    // 放射性钍元素,洗铀粗狂铀极小概率
    event.recipes.create.splashing(
        [
            'tfcorewashing:chunks_uraninite',
            Item.of('tfc:rock/loose/andesite').withChance(0.6),
            Item.of('tfc:rock/loose/andesite').withChance(0.6),
            Item.of('tfc:rock/loose/dolomite').withChance(0.3),
            Item.of('tfcorewashing:dirty_pile_uraninite').withChance(0.15),
            Item.of('create_new_age:radioactive_thorium').withChance(0.05), // 0.1概率
            Item.of('tfc:ore/emerald').withChance(0.01)
        ],
        'tfcorewashing:rocky_chunks_uraninite'
    ).processingTime(1200)
        .id('tfcorewashing:rocky_chunks/splashing/uraninite_rocky_chunk_splashing')


})
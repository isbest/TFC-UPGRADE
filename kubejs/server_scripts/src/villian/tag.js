// priority: 1000
ServerEvents.tags('item', event => {
    // 移除沉浸铝锭标签
    event.remove('forge:ingots/nickel', 'immersiveengineering:ingot_nickel');
    // 移除沉浸银锭标签
    event.remove('forge:ingots/silver', 'immersiveengineering:ingot_silver')
    // 移除沉浸钢锭标签
    event.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')
    // 移除沉浸铁板标签
    event.remove('forge:plates/iron', 'immersiveengineering:plate_iron')
    // 移除沉浸金板标签
    event.remove('forge:plates/gold', 'immersiveengineering:plate_gold');
    // 沉浸铁棒
    event.remove('forge:rods/all_metal', 'immersiveengineering:stick_iron')
    // 沉浸钢棒
    event.remove('forge:rods/steel', 'immersiveengineering:stick_steel')
    // 原版铜锭
    event.remove('forge:ingots/copper', 'minecraft:copper_ingot')
    // 原版金锭
    event.remove('forge:ingots/gold', 'minecraft:gold_ingot')
    // 原版铁锭,移除转换为铁锭的标签
    event.remove('forge:ingots/cast_iron', 'minecraft:iron_ingot')
    // 原版石英
    event.remove('forge:gems/quartz', 'minecraft:quartz')

    // 移除原版盔甲 可以被盔甲纹饰修饰的标签
    event.remove('minecraft:trimmable_armor', [
        'minecraft:leather_helmet',
        'minecraft:leather_chestplate',
        'minecraft:leather_leggings',
        'minecraft:leather_boots',
        'minecraft:chainmail_helmet',
        'minecraft:chainmail_chestplate',
        'minecraft:chainmail_leggings',
        'minecraft:chainmail_boots',
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots',
        'minecraft:golden_helmet',
        'minecraft:golden_chestplate',
        'minecraft:golden_leggings',
        'minecraft:golden_boots',
        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots',
        'minecraft:netherite_helmet',
        'minecraft:netherite_chestplate',
        'minecraft:netherite_leggings',
        'minecraft:netherite_boots',
        'minecraft:turtle_helmet'
    ])

    event.add('forge:stripped_wood', [
        "tfc:wood/stripped_wood/pine",
        "tfc:wood/stripped_log/rosewood",
        "tfc:wood/stripped_wood/rosewood",
        "tfc:wood/stripped_wood/sequoia",
        "tfc:wood/stripped_log/sequoia",
        "tfc:wood/stripped_log/spruce",
        "tfc:wood/stripped_wood/spruce",
        "tfc:wood/stripped_log/sycamore",
        "tfc:wood/stripped_wood/sycamore",
        "tfc:wood/stripped_wood/acacia",
        "tfc:wood/stripped_log/acacia",
        "tfc:wood/stripped_log/ash",
        "tfc:wood/stripped_wood/ash",
        "tfc:wood/stripped_log/aspen",
        "tfc:wood/stripped_wood/aspen",
        "tfc:wood/stripped_log/birch",
        "tfc:wood/stripped_wood/birch",
        "tfc:wood/stripped_log/blackwood",
        "tfc:wood/stripped_wood/blackwood",
        "tfc:wood/stripped_log/chestnut",
        "tfc:wood/stripped_wood/chestnut",
        "tfc:wood/stripped_log/douglas_fir",
        "tfc:wood/stripped_wood/douglas_fir",
        "tfc:wood/stripped_log/hickory",
        "tfc:wood/stripped_wood/hickory",
        "tfc:wood/stripped_log/kapok",
        "tfc:wood/stripped_wood/kapok",
        "tfc:wood/stripped_log/mangrove",
        "tfc:wood/stripped_wood/mangrove",
        "tfc:wood/stripped_log/maple",
        "tfc:wood/stripped_wood/maple",
        "tfc:wood/stripped_log/oak",
        "tfc:wood/stripped_wood/oak",
        "tfc:wood/stripped_log/palm",
        "tfc:wood/stripped_wood/palm",
        "tfc:wood/stripped_log/pine",
        "tfc:wood/stripped_wood/pine",
        "tfc:wood/stripped_log/rosewood",
        "tfc:wood/stripped_wood/rosewood",
        "tfc:wood/stripped_wood/sequoia",
        "tfc:wood/stripped_log/sequoia",
        "tfc:wood/stripped_log/spruce",
        "tfc:wood/stripped_wood/spruce",
        "tfc:wood/stripped_log/sycamore",
        "tfc:wood/stripped_wood/sycamore",
        "tfc:wood/stripped_log/white_cedar",
        "tfc:wood/stripped_wood/white_cedar",
        "tfc:wood/stripped_log/willow",
        "tfc:wood/stripped_wood/willow",
    ])

    // 工作台
    event.add('tfc:workbenches', ['minecraft:crafting_table'])

    // 岩浆块标签
    event.add('kubejs:magma_block', [
        "minecraft:magma_block",
        "tfc:rock/magma/granite",
        "tfc:rock/magma/diorite",
        "tfc:rock/magma/rhyolite",
        "tfc:rock/magma/basalt",
        "tfc:rock/magma/andesite",
        "tfc:rock/magma/dacite"
    ])

    // 可以制造纸浆的标签
    event.add('kubejs:pulpable', ['minecraft:bamboo', 'immersiveengineering:dust_wood', 'tfc:jute_fiber', 'createdieselgenerators:wood_chip'])

    // 给起火器增加点燃燃烧室的tag
    event.add('createlowheated:burner_starters', ['tfc:firestarter'])

    const CHAIN = [
        "tfc:metal/chain/red_steel",
        "tfc:metal/chain/bismuth_bronze",
        "tfc:metal/chain/blue_steel",
        "tfc:metal/chain/black_bronze",
        "tfc:metal/chain/black_steel",
        "tfc:metal/chain/bronze",
        "tfc:metal/chain/copper",
        "tfc:metal/chain/steel",
        "tfc:metal/chain/wrought_iron"
    ]
    event.add('kubejs:chain', CHAIN)

    // 木屑
    event.add('forge:dusts/wood', ['createdieselgenerators:wood_chip'])

    // 黑曜石
    event.add('forge:obsidian', ['minecraft:obsidian'])

    // 胶水
    event.add('forge:slimeballs', ['tfc:glue'])

    // for quests
    event.add('kubejs:shovel_head', [
        "tfc:stone/shovel_head/igneous_extrusive",
        "tfc:stone/shovel_head/igneous_intrusive",
        "tfc:stone/shovel_head/metamorphic",
        "tfc:stone/shovel_head/sedimentary"
    ])
    event.add('kubejs:shovel', [
        "tfc:stone/shovel/igneous_extrusive",
        "tfc:stone/shovel/igneous_intrusive",
        "tfc:stone/shovel/sedimentary",
        "tfc:stone/shovel/metamorphic"
    ])

    event.add('kubejs:axe_head', [
        "tfc:stone/axe_head/sedimentary",
        "tfc:stone/axe_head/metamorphic",
        "tfc:stone/axe_head/igneous_extrusive",
        "tfc:stone/axe_head/igneous_intrusive"
    ])
    event.add('kubejs:axe', [
        "tfc:stone/axe/sedimentary",
        "tfc:stone/axe/metamorphic",
        "tfc:stone/axe/igneous_intrusive",
        "tfc:stone/axe/igneous_extrusive"
    ])

    event.add('kubejs:knife_head', [
        "tfc:stone/knife_head/igneous_extrusive",
        "tfc:stone/knife_head/igneous_intrusive",
        "tfc:stone/knife_head/metamorphic",
        "tfc:stone/knife_head/sedimentary"
    ])
    event.add('kubejs:knife', [
        "tfc:stone/knife/metamorphic",
        "tfc:stone/knife/sedimentary",
        "tfc:stone/knife/igneous_intrusive",
        "tfc:stone/knife/igneous_extrusive"
    ])
})

ServerEvents.tags('fluid', event => {
    // 给纸浆添加tfc:usable_in_barrel标签
    event.add('tfc:usable_in_barrel', ['kubejs:pulp'])
})
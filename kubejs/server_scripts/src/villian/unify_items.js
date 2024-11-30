// priority: 10
ServerEvents.recipes(event => {
    // 铁锭统一
    event.remove({
        output: 'minecraft:iron_ingot',
        not: { id: 'minecraft:iron_ingot_from_iron_block' }
    })
    event.replaceInput(
        { input: 'minecraft:iron_ingot' },
        'minecraft:iron_ingot',
        'tfc:metal/ingot/wrought_iron'
    )
    event.replaceOutput(
        { id: 'minecraft:iron_ingot_from_iron_block' },
        'minecraft:iron_ingot',
        'tfc:metal/ingot/wrought_iron'
    )
    // 金板统一
    event.shapeless(Item.of('create:golden_sheet', 2), [
        'immersiveengineering:wirecutter',
        'tfc:metal/sheet/gold'
    ]).damageIngredient({ item: 'immersiveengineering:wirecutter' }, 1)
    // 铜板统一
    event.shapeless(Item.of('create:copper_sheet', 2), [
        'immersiveengineering:wirecutter',
        'tfc:metal/sheet/copper'
    ]).damageIngredient({ item: 'immersiveengineering:wirecutter' }, 1)
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {
            "tag": "forge:ingots/copper"
        },
        "mold": "immersiveengineering:mold_plate",
        "result": {
            "item": "create:copper_sheet"
        }
    }).id('immersiveengineering:metalpress/plate_copper')
    // 黄铜锭
    event.replaceOutput({ output: 'create:brass_ingot' }, 'create:brass_ingot', 'tfc:metal/ingot/brass')
    event.replaceInput({ input: 'create:brass_ingot' }, 'create:brass_ingot', 'tfc:metal/ingot/brass')

    // 钻石兼容
    event.replaceInput({ input: 'minecraft:diamond' }, 'minecraft:diamond', 'tfc:gem/diamond')
    // 金块兼容
    event.replaceInput({ input: 'minecraft:gold_block' }, 'minecraft:gold_block', 'tfc:metal/block/gold')
    // 绿宝石兼容
    event.replaceInput({ input: 'minecraft:emerald' }, 'minecraft:emerald', 'tfc:gem/emerald')
    // 石头兼容
    // event.replaceInput({ input: "#forge:stone" }, "#forge:stone", '#tfc:rock/raw')
    // event.replaceInput(
    //     [
    //         { id: 'create:crafting/materials/andesite_alloy_from_zinc' },
    //         { id: 'create:crafting/materials/andesite_alloy' }
    //     ],
    //     '#tfc:rock/raw',
    //     'minecraft:andesite'
    // )
    // 铜块兼容
    event.replaceInput({ input: '#forge:storage_blocks/copper' }, '#forge:storage_blocks/copper', 'tfc:metal/block/copper')
    // 铜锭统一
    event.replaceOutput({ output: "minecraft:copper_ingot" }, "minecraft:copper_ingot", "tfc:metal/ingot/copper")
    event.replaceInput({ input: 'minecraft:copper_ingot' }, 'minecraft:copper_ingot', "tfc:metal/ingot/copper")
    // 胶水 统一
    event.replaceInput({ input: 'minecraft:slime_ball' }, 'minecraft:slime_ball', 'tfc:glue')
    // 工作台配方统一
    event.replaceInput({ input: 'minecraft:crafting_table' }, 'minecraft:crafting_table', '#tfc:workbenches')

    // 石英
    event.replaceInput({ input: 'minecraft:quartz' }, 'minecraft:quartz', '#forge:gems/quartz')
    // 增加凿子+石英块出石英配方
    event.shapeless(Item.of('create:iron_sheet', 2), [
        '#tfc:chisels',
        'tfc_ie_addon:mineral/quartz_block'
    ]).damageIngredient({ item: '#tfc:chisels' }, 1)

})
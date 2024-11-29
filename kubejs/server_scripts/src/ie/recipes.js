// priority: 10
// 禁用ie配方
const DISABLE_IE_RECIPES = [
    'immersiveengineering:arcfurnace/netherite_scrap', // 下届合金
    'immersiveengineering:arcfurnace/steel', // 原版铁锭 -> 钢锭
    'immersiveengineering:crafting/raw_hammercrushing_copper', // 铁锤铜矿
    'immersiveengineering:crafting/hammercrushing_copper', // 铁锤铜原矿
    'immersiveengineering:crusher/prismarine_brick', // 粉碎海晶石
    'immersiveengineering:crusher/prismarine', // 粉碎海晶石
    'immersiveengineering:crusher/dark_prismarine', // 粉碎暗黑海晶石
    'immersiveengineering:crusher/ingot_iron', // 粉碎原版铁锭
    'immersiveengineering:crusher/sandstone', // 粉碎原版砂岩
    'immersiveengineering:crusher/blaze_powder', // 粉碎烈焰棒
    'immersiveengineering:crusher/glowstone', // 粉碎萤石
    'immersiveengineering:crusher/amethyst', // 粉碎紫水晶块
    'immersiveengineering:crafting/storage_nickel_to_ingot_nickel', // ie 镍块分解成镍锭,ie的镍会被删除
    // tfc_ie 铬尖晶石 电弧炉配方
    'tfc_ie_addon:arc_furnace/small_chromite',
    'tfc_ie_addon:arc_furnace/poor_chromite',
    'tfc_ie_addon:arc_furnace/normal_chromite',
    'tfc_ie_addon:arc_furnace/rich_chromite',
    'immersiveengineering:metalpress/plate_iron', // 原版铁锭压板
    // 高炉顽固配方
    'immersiveengineering:blastfurnace/steel_block',
    'immersiveengineering:blastfurnace/steel',
    // 沉浸铁棒
    'immersiveengineering:metalpress/rod_iron',
    // 粉碎石英
    'tfc_ie_addon:crusher/quartz',
]

// 需要禁用的IE配方type
const DISABLE_IE_RECIPE_TYPE = [
    // 高炉
    'immersiveengineering:blast_furnace_fuel',
    // 合金窑
    'immersiveengineering:alloy'
]

// 电弧炉增加配方
const ARC_FURNACE_PELLET = [
    // 铬粉
    { input: 'tfcorewashing:chromium_powder', output: 'firmalife:metal/ingot/chromium', i_count: 20, o_output: 1 },
    { input: 'tfcorewashing:pellet_chromium', output: 'firmalife:metal/ingot/chromium', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_chromium', output: 'firmalife:metal/ingot/chromium', i_count: 5, o_output: 4 },
    // 铝
    { input: 'tfcorewashing:pellet_bauxite', output: 'immersiveengineering:ingot_aluminum', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_bauxite', output: 'immersiveengineering:ingot_aluminum', i_count: 5, o_output: 4 },
    // 铋
    { input: 'tfcorewashing:pellet_bismuthinite', output: 'tfc:metal/ingot/bismuth', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_bismuthinite', output: 'tfc:metal/ingot/bismuth', i_count: 5, o_output: 4 },
    // 锡
    { input: 'tfcorewashing:pellet_cassiterite', output: 'tfc:metal/ingot/tin', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_cassiterite', output: 'tfc:metal/ingot/tin', i_count: 5, o_output: 4 },
    // 铜
    { input: 'tfcorewashing:pellet_copper', output: 'tfc:metal/ingot/copper', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_copper', output: 'tfc:metal/ingot/copper', i_count: 5, o_output: 4 },
    // 铜
    { input: 'tfcorewashing:pellet_malachite', output: 'tfc:metal/ingot/copper', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_malachite', output: 'tfc:metal/ingot/copper', i_count: 5, o_output: 4 },
    // 铜
    { input: 'tfcorewashing:pellet_tetrahedrite', output: 'tfc:metal/ingot/copper', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_tetrahedrite', output: 'tfc:metal/ingot/copper', i_count: 5, o_output: 4 },
    // 铅
    { input: 'tfcorewashing:pellet_galena', output: 'immersiveengineering:ingot_lead', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_galena', output: 'immersiveengineering:ingot_lead', i_count: 5, o_output: 4 },
    // 镍
    { input: 'tfcorewashing:pellet_garnierite', output: 'tfc:metal/ingot/nickel', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_garnierite', output: 'tfc:metal/ingot/nickel', i_count: 5, o_output: 4 },
    // 金
    { input: 'tfcorewashing:pellet_gold', output: 'tfc:metal/ingot/gold', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_gold', output: 'tfc:metal/ingot/gold', i_count: 5, o_output: 4 },
    // 铁
    { input: 'tfcorewashing:pellet_hematite', output: 'tfc:metal/ingot/cast_iron', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_hematite', output: 'tfc:metal/ingot/cast_iron', i_count: 5, o_output: 4 },
    // 铁
    { input: 'tfcorewashing:pellet_limonite', output: 'tfc:metal/ingot/cast_iron', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_limonite', output: 'tfc:metal/ingot/cast_iron', i_count: 5, o_output: 4 },
    // 铁
    { input: 'tfcorewashing:pellet_magnetite', output: 'tfc:metal/ingot/cast_iron', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_limonite', output: 'tfc:metal/ingot/cast_iron', i_count: 5, o_output: 4 },
    // 银
    { input: 'tfcorewashing:pellet_silver', output: 'tfc:metal/ingot/silver', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_silver', output: 'tfc:metal/ingot/silver', i_count: 5, o_output: 4 },
    // 锌
    { input: 'tfcorewashing:pellet_sphalerite', output: 'tfc:metal/ingot/zinc', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_sphalerite', output: 'tfc:metal/ingot/zinc', i_count: 5, o_output: 4 },
    // 铀
    { input: 'tfcorewashing:pellet_uraninite', output: 'immersiveengineering:ingot_uranium', i_count: 5, o_output: 1 },
    { input: 'tfcorewashing:briquet_uraninite', output: 'immersiveengineering:ingot_uranium', i_count: 5, o_output: 4 },
]

ServerEvents.recipes(event => {
    DISABLE_IE_RECIPE_TYPE.forEach(category => {
        event.remove({ type: category })
    })

    DISABLE_IE_RECIPES.forEach(id => {
        event.remove({ id: id })
    })

    event.forEachRecipe({ id: /^immersiveengineering/ }, recipe => {
        let ie_recipe_id = recipe.getId().substring(21);
        if (ie_recipe_id.startsWith('arcfurnace/raw_')  // 禁用电弧炉所有 粗矿/粗矿块 配方
            || ie_recipe_id.startsWith('arcfurnace/ore_') // 禁用所有原矿配方
            || ie_recipe_id.startsWith('crusher/raw_block') // 粗矿块粉碎
            || ie_recipe_id.startsWith('crusher/raw_ore') // 粗矿粉碎
            || ie_recipe_id.startsWith('crusher/ore') // 原矿粉碎
            || ie_recipe_id.startsWith('crusher/nether_') // 下届物品粉碎
        ) {
            event.remove({ id: recipe.getId() })
        }
    })

    ARC_FURNACE_PELLET.forEach(recipe => {
        event.custom({
            "type": "immersiveengineering:arc_furnace",
            "input": {
                "base_ingredient": {
                    "item": recipe.input
                },
                "count": recipe.i_count
            },
            "results": [
                {
                    "count": recipe.o_output,
                    "item": recipe.output
                }
            ],
            "additives": [],
            "time": 100,
            "energy": 25600
        })
    })

    // 移除工程师锤 锤出粉末的配方
    event.remove({ input: 'immersiveengineering:hammer', output: '#forge:dusts' })

    // 铁板统一, 使用机械动力的铁板
    event.custom({
        "type": "immersiveengineering:metal_press",
        "mold": "immersiveengineering:mold_plate",
        "input": {
            "tag": "forge:ingots/wrought_iron"
        },
        "result": {
            "item": "create:iron_sheet"
        },
        "energy": 2400
    }).id('tfc_ie_addon:metalpress/plate_wrought_iron')

    event.remove({ id: 'tfc_ie_addon:crafting/wrought_iron_sheet_to_plate' })
    // 耐久
    event.shapeless(Item.of('create:iron_sheet', 2), [
        'tfc:metal/sheet/wrought_iron',
        'immersiveengineering:wirecutter'
    ]).damageIngredient({ item: 'immersiveengineering:wirecutter' }, 1)

    // 沉浸工程禁用药水
    event.remove({
        type: 'minecraft:brewing',
        output: '#immersiveengineering:potions' // 输出是药水
    })
})

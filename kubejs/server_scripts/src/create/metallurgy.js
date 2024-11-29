// priority: 10
const DISABLE_RECIPES = [
    'createmetallurgy:crushing/wolframite_ore',
    'createmetallurgy:crushing/raw_wolframite',
    'createmetallurgy:crushing/raw_wolframite_block',
    'createmetallurgy:milling/crushed_raw_zinc',
    'createmetallurgy:milling/crushed_raw_gold',
    'createmetallurgy:milling/crushed_raw_copper',
    'createmetallurgy:milling/crushed_raw_wolframite',
    'create:milling/granite',
    'createmetallurgy:milling/crushed_raw_iron',
    'createmetallurgy:splashing/dirty_iron_dust',
    'create:splashing/immersiveengineering/crushed_raw_uranium',
    'createmetallurgy:splashing/dirty_copper_dust',
    'create:splashing/immersiveengineering/crushed_raw_aluminum',
    'createmetallurgy:splashing/dirty_gold_dust',
    'createmetallurgy:splashing/dirty_wolframite_dust',
    'createmetallurgy:splashing/dirty_zinc_dust',
    'createmetallurgy:melting/iron/ingot',
    'createmetallurgy:melting/iron/nugget',
    'createmetallurgy:melting/iron/rod',
    'createmetallurgy:melting/iron/dust',
    'createmetallurgy:melting/iron/plate',
    'createmetallurgy:casting_in_basin/andesite_alloy_from_iron',
    'createmetallurgy:casting_in_basin/iron/block',
    'createmetallurgy:casting_in_table/iron/rod',
    'createmetallurgy:casting_in_table/iron/nugget',
    'createmetallurgy:casting_in_table/iron/plate',
    // 金
    'createmetallurgy:melting/gold/rod',
    'createmetallurgy:melting/gold/ingot',
    'createmetallurgy:melting/gold/nugget',
    'createmetallurgy:melting/gold/dust',
    'createmetallurgy:melting/gold/plate',
    'createmetallurgy:casting_in_basin/gold/block',
    'createmetallurgy:casting_in_table/gold/plate',
    'createmetallurgy:casting_in_table/gold/rod',
    'createmetallurgy:casting_in_table/gold/rod',
    'createmetallurgy:casting_in_table/gold/nugget',
    // 镍
    'createmetallurgy:melting/nickel/plate',
    'createmetallurgy:melting/nickel/nugget',
    'createmetallurgy:melting/nickel/rod',
    'createmetallurgy:melting/nickel/ingot',
    'createmetallurgy:melting/nickel/dust',
    // 铜
    'createmetallurgy:melting/copper/wire',
    'createmetallurgy:melting/copper/ingot',
    'createmetallurgy:melting/copper/rod',
    'createmetallurgy:melting/copper/nugget',
    'createmetallurgy:melting/copper/dust',
    'createmetallurgy:melting/copper/plate',
    // 锡锭
    'createmetallurgy:melting/tin/ingot',
    'createmetallurgy:melting/tin/rod',
    // 锌
    'createmetallurgy:melting/zinc/nugget',
    'createmetallurgy:melting/zinc/ingot',
    'createmetallurgy:melting/zinc/rod',
    // 钢
    'createmetallurgy:melting/steel/nugget',
    'createmetallurgy:melting/steel/ingot',
    'createmetallurgy:melting/steel/plate',
    'createmetallurgy:melting/steel/rod',
    'createmetallurgy:melting/steel/wire',
    'createmetallurgy:melting/steel/dust',
    // 铝
    'createmetallurgy:melting/aluminum/dust',
    'createmetallurgy:melting/aluminum/rod',
    'createmetallurgy:melting/aluminum/nugget',
    'createmetallurgy:melting/aluminum/wire',
    'createmetallurgy:melting/aluminum/plate',
    'createmetallurgy:melting/aluminum/ingot',
    // 铅
    'createmetallurgy:melting/lead/plate',
    'createmetallurgy:melting/lead/dust',
    'createmetallurgy:melting/lead/wire',
    'createmetallurgy:melting/lead/ingot',
    'createmetallurgy:melting/lead/nugget',
    // 银
    'createmetallurgy:melting/silver/dust',
    'createmetallurgy:melting/silver/rod',
    'createmetallurgy:melting/silver/plate',
    'createmetallurgy:melting/silver/nugget',
    'createmetallurgy:melting/silver/ingot',
    // 锡
    'createmetallurgy:melting/tin/ingot',
    'createmetallurgy:melting/tin/rod',
    // 因瓦合金
    'createmetallurgy:alloying/invar',
    // 下届合金
    'createmetallurgy:alloying/netherite',
    // 虚空钢锭
    'createmetallurgy:alloying/void_steel',
    // 青铜
    'createmetallurgy:melting/bronze/ingot',
    'createmetallurgy:melting/bronze/rod',
    'createmetallurgy:alloying/bronze',
    // 康铜
    'createmetallurgy:melting/constantan/dust',
    'createmetallurgy:melting/constantan/nugget',
    'createmetallurgy:melting/constantan/ingot',
    'createmetallurgy:melting/constantan/plate',
    // 黄铜
    'createmetallurgy:melting/brass/nugget',
    'createmetallurgy:melting/brass/rod',
    'createmetallurgy:melting/brass/plate',
    'createmetallurgy:melting/brass/ingot',
    // 琥珀金
    'createmetallurgy:melting/electrum/dust',
    'createmetallurgy:melting/electrum/ingot',
    'createmetallurgy:melting/electrum/wire',
    'createmetallurgy:melting/electrum/plate',
    'createmetallurgy:melting/electrum/nugget',
    'createmetallurgy:alloying/steel',
    'createmetallurgy:alloying/electrum',
    'createmetallurgy:alloying/brass',
    'createmetallurgy:alloying/constantan',
    'createmetallurgy:casting_in_basin/copper_casing',
    'createmetallurgy:casting_in_basin/copper/block',
    'createmetallurgy:casting_in_table/copper/rod',
    'createmetallurgy:casting_in_table/copper/nugget',
    'createmetallurgy:casting_in_table/copper/ingot',
    'createmetallurgy:casting_in_table/copper/plate',
    'createmetallurgy:alloying/brass',
    'createmetallurgy:casting_in_basin/zinc/block',
    'createmetallurgy:casting_in_basin/andesite_alloy_from_zinc',
    'createmetallurgy:casting_in_table/zinc/nugget',
    'createmetallurgy:casting_in_table/zinc/rod',
    'createmetallurgy:casting_in_table/zinc/ingot',
    'createmetallurgy:casting_in_basin/brass_casing',
    'createmetallurgy:casting_in_basin/brass/block',
    'createmetallurgy:casting_in_table/brass/ingot',
    'createmetallurgy:casting_in_table/brass/rod',
    'createmetallurgy:casting_in_table/brass/nugget',
    'createmetallurgy:casting_in_table/steel/plate',
    'createmetallurgy:casting_in_table/steel/rod',
    'createmetallurgy:casting_in_table/steel/nugget',
    'createmetallurgy:casting_in_basin/aluminum/block',
    'createmetallurgy:casting_in_table/aluminum/plate',
    'createmetallurgy:casting_in_table/aluminum/ingot',
    'createmetallurgy:casting_in_table/aluminum/rod',
    'createmetallurgy:casting_in_table/aluminum/nugget',
    'createmetallurgy:casting_in_basin/lead/block',
    'createmetallurgy:casting_in_table/lead/plate',
    'createmetallurgy:casting_in_table/lead/nugget',
    'createmetallurgy:casting_in_table/lead/ingot',
    'createmetallurgy:alloying/constantan',
    'createmetallurgy:casting_in_basin/nickel/block',
    'createmetallurgy:casting_in_table/nickel/ingot',
    'createmetallurgy:casting_in_table/nickel/plate',
    'createmetallurgy:casting_in_table/nickel/nugget',
    'createmetallurgy:casting_in_table/nickel/rod',
    'createmetallurgy:alloying/electrum',
    'createmetallurgy:casting_in_basin/silver/block',
    'createmetallurgy:casting_in_table/silver/plate',
    'createmetallurgy:casting_in_table/silver/rod',
    'createmetallurgy:casting_in_table/silver/nugget',
    'createmetallurgy:casting_in_table/silver/ingot',
    'createmetallurgy:casting_in_table/tin/ingot',
    'createmetallurgy:casting_in_table/tin/rod',
    'createmetallurgy:casting_in_basin/electrum/block',
    'createmetallurgy:casting_in_table/electrum/ingot',
    'createmetallurgy:casting_in_table/electrum/nugget',
    'createmetallurgy:casting_in_table/electrum/plate',
    'createmetallurgy:casting_in_table/bronze/rod',
    'createmetallurgy:casting_in_table/bronze/ingot',
    'createmetallurgy:casting_in_basin/constantan/block',
    'createmetallurgy:casting_in_table/constantan/ingot',
    'createmetallurgy:casting_in_table/constantan/plate',
    'createmetallurgy:casting_in_table/constantan/nugget',
    'createmetallurgy:casting_in_table/brass/plate',
]

ServerEvents.recipes(event => {
    DISABLE_RECIPES.forEach(item => {
        event.remove({ id: item })
    })

    // 熔铸盆,平衡性调整,钢锭水平
    event.shaped(
        'createmetallurgy:foundry_basin',
        [
            "A A",
            "ABA",
            "AAA"
        ],
        {
            "A": "#forge:ingots/steel",
            "B": "tfc:fire_clay_block"
        }
    ).id("createmetallurgy:foundry_basin")

    // 铸造盆
    event.shaped(
        'createmetallurgy:casting_basin',
        [
            "A A",
            "A A",
            " B "
        ],
        {
            "A": "#forge:ingots/steel",
            "B": "tfc:fire_clay_block"
        }
    ).id("createmetallurgy:casting_basin")

    // 铸造盆
    event.shaped(
        'createmetallurgy:casting_table',
        [
            "ABA",
            "A A",
            "A A"
        ],
        {
            "A": "#forge:ingots/steel",
            "B": "tfc:fire_clay_block"
        }
    ).id("createmetallurgy:casting_table")

    // 熔铸盖先忽略

    // 玻璃熔铸盖
    event.replaceInput(
        { id: 'createmetallurgy:glassed_foundry_lid' },
        'create:framed_glass',
        '#forge:glass'
    )

    // 坚固搅拌器, 红蓝钢时代的科技
    event.shaped(
        'createmetallurgy:sturdy_whisk',
        [
            " A ",
            "BAB",
            "CBD"
        ],
        {
            "A": "create:andesite_alloy",
            "B": "create:sturdy_sheet",
            "C": "tfc:metal/ingot/red_steel",
            "D": "tfc:metal/ingot/blue_steel"
        }
    ).id("createmetallurgy:sturdy_whisk")

    // 灯泡配方,锻铁时代,无线红石yyds
    event.replaceInput(
        { output: "#forge:light_bulbs", mod: "createmetallurgy" },
        "createmetallurgy:tungsten_wire_spool",
        "tfc:metal/rod/wrought_iron"
    )

    // 石墨模板
    event.recipes.create.pressing(
        'createmetallurgy:graphite_blank_mold',
        'tfc:fire_clay'
    ).id('createmetallurgy:pressing/graphite_blank_mold')


    // create:empty_createmetallurgy_molten_iron_bucket_of_createmetallurgy_molten_iron
    const { createmetallurgy } = event.recipes

    // 融化
    const MELT_TO_CAST_IRON = [
        // 铁
        { fluid: "tfc:metal/cast_iron", input: "castirongrill:cast_iron_grill", time: 80, output: 400 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/ingot/cast_iron", time: 20, output: 100 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/double_ingot/cast_iron", time: 40, output: 200 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/sheet/cast_iron", time: 40, output: 200 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/double_sheet/cast_iron", time: 80, output: 400 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:ore/small_limonite", time: 1, output: 5 },
        { fluid: "tfc:metal/cast_iron", input: "tfcorewashing:pellet_limonite", time: 4, output: 20 },
        { fluid: "tfc:metal/cast_iron", input: "tfcorewashing:briquet_limonite", time: 16, output: 80 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:powder/limonite", time: 1, output: 5 },
        { fluid: "tfc:metal/cast_iron", input: "tfcorewashing:pellet_hematite", time: 1, output: 5 },
        { fluid: "tfc:metal/cast_iron", input: "tfcorewashing:briquet_hematite", time: 4, output: 20 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:ore/small_hematite", time: 16, output: 80 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:powder/hematite", time: 1, output: 5 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:ore/small_magnetite", time: 1, output: 5 },
        { fluid: "tfc:metal/cast_iron", input: "tfcorewashing:pellet_magnetite", time: 4, output: 20 },
        { fluid: "tfc:metal/cast_iron", input: "tfcorewashing:briquet_magnetite", time: 16, output: 80 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:powder/magnetite", time: 1, output: 5 },
        { fluid: "tfc:metal/cast_iron", input: "immersiveengineering:dust_iron", time: 20, output: 100 },
        // 金
        { fluid: "tfc:metal/gold", input: "tfc:metal/ingot/gold", time: 20, output: 100 },
        { fluid: "tfc:metal/gold", input: "immersiveengineering:dust_gold", time: 20, output: 100 },
        { fluid: "tfc:metal/gold", input: "tfc:metal/double_ingot/gold", time: 40, output: 200 },
        { fluid: "tfc:metal/gold", input: "tfc:metal/sheet/gold", time: 40, output: 200 },
        { fluid: "tfc:metal/gold", input: "tfc:metal/double_sheet/gold", time: 80, output: 400 },
        { fluid: "tfc:metal/gold", input: "tfc:ore/small_native_gold", time: 1, output: 5 },
        { fluid: "tfc:metal/gold", input: "tfc:powder/native_gold", time: 1, output: 5 },
        { fluid: "tfc:metal/gold", input: "tfcorewashing:pellet_gold", time: 4, output: 20 },
        { fluid: "tfc:metal/gold", input: "tfc:metal/rod/gold", time: 10, output: 50 },
        { fluid: "tfc:metal/gold", input: "tfcorewashing:briquet_gold", time: 16, output: 80 },
        // 铜
        { fluid: "tfc:metal/copper", input: "tfc:metal/ingot/copper", time: 20, output: 100 },
        { fluid: "tfc:metal/copper", input: "immersiveengineering:dust_copper", time: 20, output: 100 },
        { fluid: "tfc:metal/copper", input: "tfc_ie_addon:metal/double_ingot/constantan", time: 40, output: 200 },
        { fluid: "tfc:metal/copper", input: "tfc:metal/sheet/copper", time: 40, output: 200 },
        { fluid: "tfc:metal/copper", input: "tfc:metal/double_sheet/copper", time: 80, output: 400 },
        { fluid: "tfc:metal/copper", input: "tfc:ore/small_native_copper", time: 1, output: 5 },
        { fluid: "tfc:metal/copper", input: "tfc:powder/native_copper", time: 1, output: 5 },
        { fluid: "tfc:metal/copper", input: "tfcorewashing:pellet_copper", time: 4, output: 20 },
        { fluid: "tfc:metal/copper", input: "tfc:metal/rod/copper", time: 10, output: 50 },
        { fluid: "tfc:metal/copper", input: "tfcorewashing:briquet_copper", time: 16, output: 80 },
        { fluid: "tfc:metal/copper", input: "tfc:ore/small_tetrahedrite", time: 1, output: 5 },
        { fluid: "tfc:metal/copper", input: "tfc:powder/tetrahedrite", time: 1, output: 5 },
        { fluid: "tfc:metal/copper", input: "tfcorewashing:pellet_tetrahedrite", time: 4, output: 20 },
        { fluid: "tfc:metal/copper", input: "tfcorewashing:briquet_tetrahedrite", time: 16, output: 80 },
        { fluid: "tfc:metal/copper", input: "tfc:ore/small_malachite", time: 1, output: 5 },
        { fluid: "tfc:metal/copper", input: "tfc:powder/malachite", time: 1, output: 5 },
        { fluid: "tfc:metal/copper", input: "tfcorewashing:pellet_malachite", time: 4, output: 20 },
        { fluid: "tfc:metal/copper", input: "tfcorewashing:briquet_malachite", time: 16, output: 80 },
        // 锌
        { fluid: "tfc:metal/zinc", input: "tfc:metal/ingot/zinc", time: 20, output: 100 },
        { fluid: "tfc:metal/zinc", input: "tfc:metal/double_ingot/zinc", time: 40, output: 200 },
        { fluid: "tfc:metal/zinc", input: "tfc:metal/sheet/zinc", time: 40, output: 200 },
        { fluid: "tfc:metal/zinc", input: "tfc:metal/double_sheet/zinc", time: 80, output: 400 },
        { fluid: "tfc:metal/zinc", input: "tfc:ore/small_sphalerite", time: 1, output: 5 },
        { fluid: "tfc:metal/zinc", input: "tfc:powder/sphalerite", time: 1, output: 5 },
        { fluid: "tfc:metal/zinc", input: "tfcorewashing:pellet_sphalerite", time: 4, output: 20 },
        { fluid: "tfc:metal/zinc", input: "tfc:metal/rod/zinc", time: 10, output: 50 },
        { fluid: "tfc:metal/zinc", input: "tfcorewashing:briquet_sphalerite", time: 16, output: 80 },
        // 铋
        { fluid: "tfc:metal/bismuth", input: "tfc:metal/ingot/bismuth", time: 20, output: 100 },
        { fluid: "tfc:metal/bismuth", input: "tfc:metal/double_ingot/bismuth", time: 40, output: 200 },
        { fluid: "tfc:metal/bismuth", input: "tfc:metal/sheet/bismuth", time: 40, output: 200 },
        { fluid: "tfc:metal/bismuth", input: "tfc:metal/double_sheet/bismuth", time: 80, output: 400 },
        { fluid: "tfc:metal/bismuth", input: "tfc:ore/small_bismuthinite", time: 1, output: 5 },
        { fluid: "tfc:metal/bismuth", input: "tfc:powder/bismuthinite", time: 1, output: 5 },
        { fluid: "tfc:metal/bismuth", input: "tfcorewashing:pellet_bismuthinite", time: 4, output: 20 },
        { fluid: "tfc:metal/bismuth", input: "tfc:metal/rod/bismuth", time: 10, output: 50 },
        { fluid: "tfc:metal/bismuth", input: "tfcorewashing:briquet_bismuthinite", time: 20, output: 80 },
        // 铝
        { fluid: "tfc_ie_addon:metal/aluminum", input: "immersiveengineering:ingot_aluminum", time: 20, output: 100 },
        { fluid: "tfc_ie_addon:metal/aluminum", input: "immersiveengineering:dust_aluminum", time: 20, output: 100 },
        { fluid: "tfc_ie_addon:metal/aluminum", input: "tfc_ie_addon:metal/double_ingot/aluminum", time: 40, output: 200 },
        { fluid: "tfc_ie_addon:metal/aluminum", input: "tfc_ie_addon:metal/sheet/aluminum", time: 40, output: 200 },
        { fluid: "tfc_ie_addon:metal/aluminum", input: "tfc_ie_addon:ore/small_bauxite", time: 1, output: 5 },
        { fluid: "tfc_ie_addon:metal/aluminum", input: "tfc_ie_addon:powder/bauxite", time: 1, output: 5 },
        { fluid: "tfc_ie_addon:metal/aluminum", input: "tfcorewashing:pellet_bauxite", time: 4, output: 20 },
        { fluid: "tfc_ie_addon:metal/aluminum", input: "immersiveengineering:stick_aluminum", time: 10, output: 50 },
        { fluid: "tfc_ie_addon:metal/aluminum", input: "tfcorewashing:briquet_bauxite", time: 16, output: 80 },
        // 锡
        { fluid: "tfc:metal/tin", input: "tfc:metal/ingot/tin", time: 20, output: 100 },
        { fluid: "tfc:metal/tin", input: "tfc:metal/double_ingot/tin", time: 40, output: 200 },
        { fluid: "tfc:metal/tin", input: "tfc:metal/sheet/tin", time: 40, output: 200 },
        { fluid: "tfc:metal/tin", input: "tfc:metal/double_sheet/tin", time: 80, output: 400 },
        { fluid: "tfc:metal/tin", input: "tfc:ore/small_cassiterite", time: 1, output: 5 },
        { fluid: "tfc:metal/tin", input: "tfc:powder/cassiterite", time: 1, output: 5 },
        { fluid: "tfc:metal/tin", input: "tfcorewashing:pellet_cassiterite", time: 4, output: 20 },
        { fluid: "tfc:metal/tin", input: "tfc:metal/rod/tin", time: 10, output: 50 },
        { fluid: "tfc:metal/tin", input: "tfcorewashing:briquet_cassiterite", time: 16, output: 80 },
        // 铬
        { fluid: "firmalife:metal/chromium", input: "firmalife:metal/ingot/chromium", time: 20, output: 100 },
        { fluid: "firmalife:metal/chromium", input: "firmalife:metal/double_ingot/chromium", time: 40, output: 200 },
        { fluid: "firmalife:metal/chromium", input: "firmalife:metal/sheet/chromium", time: 40, output: 200 },
        { fluid: "firmalife:metal/chromium", input: "firmalife:metal/double_sheet/chromium", time: 80, output: 400 },
        { fluid: "firmalife:metal/chromium", input: "firmalife:ore/small_chromite", time: 1, output: 5 },
        { fluid: "firmalife:metal/chromium", input: "tfcorewashing:chromium_powder", time: 1, output: 5 },
        { fluid: "firmalife:metal/chromium", input: "tfcorewashing:pellet_chromium", time: 4, output: 20 },
        { fluid: "firmalife:metal/chromium", input: "firmalife:metal/rod/chromium", time: 10, output: 50 },
        { fluid: "firmalife:metal/chromium", input: "tfcorewashing:briquet_chromium", time: 16, output: 80 },
        // 铅
        { fluid: "tfc_ie_addon:metal/lead", input: "immersiveengineering:ingot_lead", time: 20, output: 100 },
        { fluid: "tfc_ie_addon:metal/lead", input: "immersiveengineering:dust_lead", time: 20, output: 100 },
        { fluid: "tfc_ie_addon:metal/lead", input: "tfc_ie_addon:metal/double_ingot/lead", time: 40, output: 200 },
        { fluid: "tfc_ie_addon:metal/lead", input: "tfc_ie_addon:metal/sheet/lead", time: 40, output: 200 },
        { fluid: "tfc_ie_addon:metal/lead", input: "tfc_ie_addon:powder/galena", time: 1, output: 5 },
        { fluid: "tfc_ie_addon:metal/lead", input: "tfc_ie_addon:ore/small_galena", time: 1, output: 5 },
        { fluid: "tfc_ie_addon:metal/lead", input: "tfcorewashing:pellet_galena", time: 4, output: 20 },
        { fluid: "tfc_ie_addon:metal/lead", input: "tfcorewashing:briquet_galena", time: 16, output: 80 },
        // 镍
        { fluid: "tfc:metal/nickel", input: "immersiveengineering:dust_nickel", time: 20, output: 100 },
        { fluid: "tfc:metal/nickel", input: "tfc:metal/ingot/nickel", time: 20, output: 100 },
        { fluid: "tfc:metal/nickel", input: "tfc:metal/double_ingot/nickel", time: 40, output: 200 },
        { fluid: "tfc:metal/nickel", input: "tfc:metal/sheet/nickel", time: 40, output: 200 },
        { fluid: "tfc:metal/nickel", input: "tfc:metal/double_sheet/nickel", time: 80, output: 400 },
        { fluid: "tfc:metal/nickel", input: "tfc:ore/small_garnierite", time: 1, output: 5 },
        { fluid: "tfc:metal/nickel", input: "tfc:powder/garnierite", time: 1, output: 5 },
        { fluid: "tfc:metal/nickel", input: "tfcorewashing:pellet_garnierite", time: 4, output: 20 },
        { fluid: "tfc:metal/nickel", input: "tfc:metal/rod/nickel", time: 10, output: 50 },
        { fluid: "tfc:metal/nickel", input: "tfcorewashing:briquet_garnierite", time: 16, output: 80 },
        // 银
        { fluid: "tfc:metal/silver", input: "immersiveengineering:dust_silver", time: 20, output: 100 },
        { fluid: "tfc:metal/silver", input: "tfc:metal/ingot/silver", time: 20, output: 100 },
        { fluid: "tfc:metal/silver", input: "tfc:metal/double_ingot/silver", time: 40, output: 200 },
        { fluid: "tfc:metal/silver", input: "tfc:metal/sheet/silver", time: 40, output: 200 },
        { fluid: "tfc:metal/silver", input: "tfc:metal/double_sheet/silver", time: 80, output: 400 },
        { fluid: "tfc:metal/silver", input: "tfc:ore/small_native_silver", time: 1, output: 5 },
        { fluid: "tfc:metal/silver", input: "tfc:powder/native_silver", time: 1, output: 5 },
        { fluid: "tfc:metal/silver", input: "tfcorewashing:pellet_silver", time: 4, output: 20 },
        { fluid: "tfc:metal/silver", input: "tfc:metal/rod/silver", time: 10, output: 50 },
        { fluid: "tfc:metal/silver", input: "tfcorewashing:briquet_silver", time: 16, output: 80 },
        // 铀
        { fluid: "tfc_ie_addon:metal/uranium", input: "immersiveengineering:dust_uranium", time: 20, output: 100 },
        { fluid: "tfc_ie_addon:metal/uranium", input: "immersiveengineering:ingot_uranium", time: 20, output: 100 },
        { fluid: "tfc_ie_addon:metal/uranium", input: "tfc_ie_addon:metal/double_ingot/uranium", time: 40, output: 200 },
        { fluid: "tfc_ie_addon:metal/uranium", input: "tfc_ie_addon:metal/sheet/uranium", time: 40, output: 200 },
        { fluid: "tfc_ie_addon:metal/uranium", input: "tfc_ie_addon:powder/uraninite", time: 1, output: 5 },
        { fluid: "tfc_ie_addon:metal/uranium", input: "tfc_ie_addon:ore/small_uraninite", time: 1, output: 5 },
        { fluid: "tfc_ie_addon:metal/uranium", input: "tfcorewashing:pellet_uraninite", time: 4, output: 20 },
        { fluid: "tfc_ie_addon:metal/uranium", input: "tfcorewashing:briquet_uraninite", time: 16, output: 80 },
        // 青铜
        { fluid: "tfc:metal/bronze", input: "tfc:metal/ingot/bronze", time: 20, output: 100 },
        { fluid: "tfc:metal/bronze", input: "tfc:metal/double_ingot/bronze", time: 40, output: 200 },
        { fluid: "tfc:metal/bronze", input: "tfc:metal/sheet/bronze", time: 40, output: 200 },
        { fluid: "tfc:metal/bronze", input: "tfc:metal/double_sheet/bronze", time: 80, output: 400 },
        { fluid: "tfc:metal/bronze", input: "tfc:metal/rod/bronze", time: 10, output: 50 },
        // 黑铜
        { fluid: "tfc:metal/black_bronze", input: "tfc:metal/ingot/black_bronze", time: 20, output: 100 },
        { fluid: "tfc:metal/black_bronze", input: "tfc:metal/double_ingot/black_bronze", time: 40, output: 200 },
        { fluid: "tfc:metal/black_bronze", input: "tfc:metal/sheet/black_bronze", time: 40, output: 200 },
        { fluid: "tfc:metal/black_bronze", input: "tfc:metal/double_sheet/black_bronze", time: 80, output: 400 },
        { fluid: "tfc:metal/black_bronze", input: "tfc:metal/rod/black_bronze", time: 10, output: 50 },
        { fluid: "tfc:metal/black_bronze", input: "tfc:metal/anvil/black_bronze", time: 280, output: 1400 },
        // 康铜
        { fluid: "tfc_ie_addon:metal/constantan", input: "immersiveengineering:ingot_constantan", time: 20, output: 100 },
        { fluid: "tfc_ie_addon:metal/constantan", input: "tfc_ie_addon:metal/double_ingot/constantan", time: 40, output: 200 },
        { fluid: "tfc_ie_addon:metal/constantan", input: "tfc_ie_addon:metal/sheet/constantan", time: 40, output: 200 },
        // 铋铜
        { fluid: "tfc:metal/bismuth_bronze", input: "tfc:metal/ingot/bismuth_bronze", time: 20, output: 100 },
        { fluid: "tfc:metal/bismuth_bronze", input: "tfc:metal/double_ingot/bismuth_bronze", time: 40, output: 200 },
        { fluid: "tfc:metal/bismuth_bronze", input: "tfc:metal/sheet/bismuth_bronze", time: 40, output: 200 },
        { fluid: "tfc:metal/bismuth_bronze", input: "tfc:metal/double_sheet/bismuth_bronze", time: 80, output: 400 },
        { fluid: "tfc:metal/bismuth_bronze", input: "tfc:metal/rod/bismuth_bronze", time: 10, output: 50 },
        { fluid: "tfc:metal/bismuth_bronze", input: "tfc:metal/anvil/bismuth_bronze", time: 280, output: 1400 },
        // 黄铜
        { fluid: "tfc:metal/brass", input: "tfc:metal/ingot/brass", time: 20, output: 100 },
        { fluid: "tfc:metal/brass", input: "tfc:metal/double_ingot/brass", time: 40, output: 200 },
        { fluid: "tfc:metal/brass", input: "tfc:metal/sheet/brass", time: 40, output: 200 },
        { fluid: "tfc:metal/brass", input: "tfc:metal/double_sheet/brass", time: 80, output: 400 },
        { fluid: "tfc:metal/brass", input: "tfc:metal/rod/brass", time: 10, output: 50 },
        { fluid: "tfc:metal/brass", input: "tfc:brass_mechanisms", time: 10, output: 50 },
        // 琥珀金
        { fluid: "tfc_ie_addon:metal/electrum", input: "immersiveengineering:ingot_electrum", time: 20, output: 100 },
        { fluid: "tfc_ie_addon:metal/electrum", input: "tfc_ie_addon:metal/double_ingot/electrum", time: 40, output: 200 },
        { fluid: "tfc_ie_addon:metal/electrum", input: "tfc_ie_addon:metal/sheet/electrum", time: 40, output: 200 },
        // 玫瑰金
        { fluid: "tfc:metal/rose_gold", input: "tfc:metal/ingot/rose_gold", time: 20, output: 100 },
        { fluid: "tfc:metal/rose_gold", input: "tfc:metal/double_ingot/rose_gold", time: 40, output: 200 },
        { fluid: "tfc:metal/rose_gold", input: "tfc:metal/sheet/rose_gold", time: 40, output: 200 },
        { fluid: "tfc:metal/rose_gold", input: "tfc:metal/double_sheet/rose_gold", time: 80, output: 400 },
        { fluid: "tfc:metal/rose_gold", input: "tfc:metal/rod/rose_gold", time: 10, output: 50 },
        // 纹银
        { fluid: "tfc:metal/sterling_silver", input: "tfc:metal/ingot/sterling_silver", time: 20, output: 100 },
        { fluid: "tfc:metal/sterling_silver", input: "tfc:metal/double_ingot/sterling_silver", time: 40, output: 200 },
        { fluid: "tfc:metal/sterling_silver", input: "tfc:metal/sheet/sterling_silver", time: 40, output: 200 },
        { fluid: "tfc:metal/sterling_silver", input: "tfc:metal/double_sheet/sterling_silver", time: 80, output: 400 },
        { fluid: "tfc:metal/sterling_silver", input: "tfc:metal/rod/sterling_silver", time: 10, output: 50 },
        // 不锈钢
        { fluid: "firmalife:metal/stainless_steel", input: "firmalife:metal/ingot/stainless_steel", time: 20, output: 100 },
        { fluid: "firmalife:metal/stainless_steel", input: "firmalife:metal/double_ingot/stainless_steel", time: 40, output: 200 },
        { fluid: "firmalife:metal/stainless_steel", input: "firmalife:metal/sheet/stainless_steel", time: 40, output: 200 },
        { fluid: "firmalife:metal/stainless_steel", input: "firmalife:metal/double_sheet/stainless_steel", time: 80, output: 400 },
        { fluid: "firmalife:metal/stainless_steel", input: "firmalife:metal/rod/stainless_steel", time: 10, output: 50 },
        // 锻铁->铸铁
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/ingot/wrought_iron", time: 20, output: 100 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/double_ingot/wrought_iron", time: 40, output: 200 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/sheet/wrought_iron", time: 40, output: 200 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/double_sheet/wrought_iron", time: 80, output: 400 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:wrought_iron_grill", time: 80, output: 400 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/rod/wrought_iron", time: 10, output: 50 },
        { fluid: "tfc:metal/cast_iron", input: "tfc:metal/anvil/wrought_iron", time: 280, output: 1400 },
        // 钢->熔融钢
        { fluid: "tfc:metal/steel", input: "tfc:metal/ingot/steel", time: 20, output: 100 },
        { fluid: "tfc:metal/steel", input: "tfc:metal/double_ingot/steel", time: 40, output: 200 },
        { fluid: "tfc:metal/steel", input: "tfc:metal/sheet/steel", time: 40, output: 200 },
        { fluid: "tfc:metal/steel", input: "tfc:metal/double_sheet/steel", time: 80, output: 400 },
        { fluid: "tfc:metal/steel", input: "tfc:metal/rod/steel", time: 10, output: 50 },
        { fluid: "tfc:metal/steel", input: "tfc:metal/anvil/steel", time: 280, output: 1400 },
        // 脆钢
        { fluid: "tfc:metal/weak_steel", input: "tfc:metal/ingot/weak_steel", time: 20, output: 100 },
        // 黑钢
        { fluid: "tfc:metal/black_steel", input: "tfc:metal/ingot/black_steel", time: 20, output: 100 },
        { fluid: "tfc:metal/black_steel", input: "tfc:metal/double_ingot/black_steel", time: 40, output: 200 },
        { fluid: "tfc:metal/black_steel", input: "tfc:metal/sheet/black_steel", time: 40, output: 200 },
        { fluid: "tfc:metal/black_steel", input: "tfc:metal/double_sheet/black_steel", time: 80, output: 400 },
        { fluid: "tfc:metal/black_steel", input: "tfc:metal/rod/black_steel", time: 10, output: 50 },
        { fluid: "tfc:metal/black_steel", input: "tfc:metal/anvil/black_steel", time: 280, output: 1400 },
        // 脆红钢
        { fluid: "tfc:metal/weak_red_steel", input: "tfc:metal/ingot/weak_red_steel", time: 20, output: 100 },
        // 红钢
        { fluid: "tfc:metal/red_steel", input: "tfc:metal/ingot/red_steel", time: 20, output: 100 },
        { fluid: "tfc:metal/red_steel", input: "tfc:metal/double_ingot/red_steel", time: 40, output: 200 },
        { fluid: "tfc:metal/red_steel", input: "tfc:metal/sheet/red_steel", time: 40, output: 200 },
        { fluid: "tfc:metal/red_steel", input: "tfc:metal/double_sheet/red_steel", time: 80, output: 400 },
        { fluid: "tfc:metal/red_steel", input: "tfc:metal/rod/red_steel", time: 10, output: 50 },
        { fluid: "tfc:metal/red_steel", input: "tfc:metal/anvil/red_steel", time: 280, output: 1400 },
        // 脆蓝钢
        { fluid: "tfc:metal/weak_blue_steel", input: "tfc:metal/ingot/weak_blue_steel", time: 20, output: 100 },
        // 蓝钢
        { fluid: "tfc:metal/blue_steel", input: "tfc:metal/ingot/blue_steel", time: 20, output: 100 },
        { fluid: "tfc:metal/blue_steel", input: "tfc:metal/double_ingot/blue_steel", time: 40, output: 200 },
        { fluid: "tfc:metal/blue_steel", input: "tfc:metal/sheet/blue_steel", time: 40, output: 200 },
        { fluid: "tfc:metal/blue_steel", input: "tfc:metal/double_sheet/blue_steel", time: 80, output: 400 },
        { fluid: "tfc:metal/blue_steel", input: "tfc:metal/rod/blue_steel", time: 10, output: 50 },
        { fluid: "tfc:metal/blue_steel", input: "tfc:metal/anvil/blue_steel", time: 280, output: 1400 },

    ]

    MELT_TO_CAST_IRON.forEach(item => {
        let id = "kubejs:" + item.fluid.replace(/:|\//g, '_') + "_" + item.input.replace(/:|\//g, '_')
        createmetallurgy.melting(
            Fluid.of(item.fluid, item.output),
            item.input
        )
            .processingTime(item.time)
            .heatRequirement("superheated")
            .id(id)
    })

    // 浇筑
    const CAST_IN_TABLE = [
        // 熔融铸铁，转化成铸铁锭
        {
            output: "tfc:metal/ingot/cast_iron",
            fluid: "tfc:metal/cast_iron",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/cast_iron",
            fluid: "tfc:metal/cast_iron",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 熔融生铁,铸造成生铁方坯
        {
            output: "tfc:raw_iron_bloom",
            fluid: "tfc:metal/pig_iron",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        // 熔融钢,铸造成生铁锭
        {
            output: 'tfc:metal/ingot/pig_iron',
            fluid: 'tfc:metal/steel',
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        // 金
        {
            output: "tfc:metal/ingot/gold",
            fluid: "tfc:metal/gold",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/gold",
            fluid: "tfc:metal/gold",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 铜
        {
            output: "tfc:metal/ingot/copper",
            fluid: "tfc:metal/copper",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/copper",
            fluid: "tfc:metal/copper",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 锌
        {
            output: "create:zinc_ingot",
            fluid: "tfc:metal/zinc",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/zinc",
            fluid: "tfc:metal/zinc",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 铋
        {
            output: "tfc:metal/ingot/bismuth",
            fluid: "tfc:metal/bismuth",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/bismuth",
            fluid: "tfc:metal/bismuth",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 铝
        {
            output: "immersiveengineering:ingot_aluminum",
            fluid: "tfc_ie_addon:metal/aluminum",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "immersiveengineering:stick_aluminum",
            fluid: "tfc_ie_addon:metal/aluminum",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 锡
        {
            output: "tfc:metal/ingot/tin",
            fluid: "tfc:metal/tin",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/tin",
            fluid: "tfc:metal/tin",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 铬
        {
            output: "firmalife:metal/ingot/chromium",
            fluid: "firmalife:metal/chromium",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "firmalife:metal/rod/chromium",
            fluid: "firmalife:metal/chromium",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 铅
        {
            output: "immersiveengineering:ingot_lead",
            fluid: "tfc_ie_addon:metal/lead",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        // 镍
        {
            output: "tfc:metal/ingot/nickel",
            fluid: "tfc:metal/nickel",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/nickel",
            fluid: "tfc:metal/nickel",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 银
        {
            output: "tfc:metal/ingot/silver",
            fluid: "tfc:metal/silver",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/silver",
            fluid: "tfc:metal/silver",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 铀
        {
            output: 'immersiveengineering:ingot_uranium',
            fluid: "tfc_ie_addon:metal/uranium",
            amount: 100,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 青铜
        {
            output: "tfc:metal/ingot/bronze",
            fluid: "tfc:metal/bronze",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/bronze",
            fluid: "tfc:metal/bronze",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 黑铜
        {
            output: "tfc:metal/ingot/black_bronze",
            fluid: "tfc:metal/black_bronze",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/black_bronze",
            fluid: "tfc:metal/black_bronze",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 康铜
        {
            output: "immersiveengineering:ingot_constantan",
            fluid: "tfc_ie_addon:metal/constantan",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        // 铋铜
        {
            output: "tfc:metal/ingot/bismuth_bronze",
            fluid: "tfc:metal/bismuth_bronze",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/bismuth_bronze",
            fluid: "tfc:metal/bismuth_bronze",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 黄铜
        {
            output: "tfc:metal/ingot/brass",
            fluid: "tfc:metal/brass",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/brass",
            fluid: "tfc:metal/brass",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        {
            output: "tfc:brass_mechanisms",
            fluid: "tfc:metal/brass",
            amount: 50,
            mold: "createmetallurgy:graphite_gear_mold",
            time: 60
        },
        // 琥珀金
        {
            output: "immersiveengineering:ingot_electrum",
            fluid: "tfc_ie_addon:metal/electrum",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        // 玫瑰金
        {
            output: "tfc:metal/ingot/rose_gold",
            fluid: "tfc:metal/rose_gold",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/rose_gold",
            fluid: "tfc:metal/rose_gold",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 纹银
        {
            output: "tfc:metal/ingot/sterling_silver",
            fluid: "tfc:metal/sterling_silver",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/sterling_silver",
            fluid: "tfc:metal/sterling_silver",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 不锈钢
        {
            output: "firmalife:metal/ingot/stainless_steel",
            fluid: "firmalife:metal/stainless_steel",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "firmalife:metal/rod/stainless_steel",
            fluid: "firmalife:metal/stainless_steel",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 脆钢
        {
            output: "tfc:metal/ingot/weak_steel",
            fluid: "tfc:metal/weak_steel",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        // 黑钢
        {
            output: "tfc:metal/ingot/black_steel",
            fluid: "tfc:metal/black_steel",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/black_steel",
            fluid: "tfc:metal/black_steel",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 脆红钢
        {
            output: "tfc:metal/ingot/weak_red_steel",
            fluid: "tfc:metal/weak_red_steel",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        // 红钢
        {
            output: "tfc:metal/ingot/red_steel",
            fluid: "tfc:metal/red_steel",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/red_steel",
            fluid: "tfc:metal/red_steel",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
        // 脆蓝钢
        {
            output: "tfc:metal/ingot/weak_blue_steel",
            fluid: "tfc:metal/weak_blue_steel",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        // 红钢
        {
            output: "tfc:metal/ingot/blue_steel",
            fluid: "tfc:metal/blue_steel",
            amount: 100,
            mold: "createmetallurgy:graphite_ingot_mold",
            time: 60
        },
        {
            output: "tfc:metal/rod/blue_steel",
            fluid: "tfc:metal/blue_steel",
            amount: 50,
            mold: "createmetallurgy:graphite_rod_mold",
            time: 60
        },
    ]

    CAST_IN_TABLE.forEach(item => {
        createmetallurgy.casting_in_table(
            item.output,
            [
                {
                    item: item.mold
                },
                {
                    fluid: item.fluid,
                    amount: item.amount
                }
            ]
        ).processingTime(item.time)
    })

    // 熔融生铁
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/pig_iron', 100),
        [
            Item.of("minecraft:charcoal"),
            Item.of("minecraft:charcoal"), // 数量必须这么设置,奇怪
            Fluid.of("tfc:metal/cast_iron", 100)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_pig_iron")
    // 熔融钢
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/steel', 100),
        [
            'tfc:powder/flux',
            'tfc:metal/pig_iron'
        ]
    )
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_steel")

    // 合金配方
    // 青铜 铜90 锡10
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/bronze', 100),
        [
            Fluid.of('tfc:metal/copper', 90),
            Fluid.of('tfc:metal/tin', 10)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_bronze")
    // 黑铜 铜60 金 20 银20
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/black_bronze', 100),
        [
            Fluid.of('tfc:metal/copper', 60),
            Fluid.of('tfc:metal/silver', 20),
            Fluid.of('tfc:metal/gold', 20),
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_black_bronze")
    // 康铜 铜 50 镍 50
    createmetallurgy.alloying(
        Fluid.of('tfc_ie_addon:metal/constantan', 100),
        [
            Fluid.of('tfc:metal/copper', 50),
            Fluid.of('tfc:metal/nickel', 50)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_constantan")
    // 铋铜 铜60 铋10 锌30
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/bismuth_bronze', 100),
        [
            Fluid.of('tfc:metal/copper', 60),
            Fluid.of('tfc:metal/bismuth', 10),
            Fluid.of('tfc:metal/zinc', 30)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_bismuth_bronze")
    // 黄铜 铜90 锌10
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/brass', 100),
        [
            Fluid.of('tfc:metal/copper', 90),
            Fluid.of('tfc:metal/zinc', 10)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_brass")
    // 琥珀金 金50 银50
    createmetallurgy.alloying(
        Fluid.of('tfc_ie_addon:metal/electrum', 100),
        [
            Fluid.of('tfc:metal/silver', 50),
            Fluid.of('tfc:metal/gold', 50),
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_electrum")
    // 玫瑰金 铜30 金70
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/rose_gold', 100),
        [
            Fluid.of('tfc:metal/copper', 30),
            Fluid.of('tfc:metal/gold', 70),
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_rose_gold")
    // 纹银 铜40 银60
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/sterling_silver', 100),
        [
            Fluid.of('tfc:metal/copper', 40),
            Fluid.of('tfc:metal/silver', 60),
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_sterling_silver")
    // 不锈钢 钢60 铬20 镍20
    createmetallurgy.alloying(
        Fluid.of('firmalife:metal/stainless_steel', 100),
        [
            Fluid.of('tfc:metal/steel', 60),
            Fluid.of('firmalife:metal/chromium', 20),
            Fluid.of('tfc:metal/nickel', 20)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_stainless_steel")

    // 熔融脆钢 钢50 黑铜25 镍25
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/weak_steel', 100),
        [
            Fluid.of('tfc:metal/steel', 50),
            Fluid.of('tfc:metal/black_bronze', 25),
            Fluid.of('tfc:metal/nickel', 25)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_weak_steel")

    // 脆红钢 钢20 黄铜15 玫瑰金15 黑钢50
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/weak_red_steel', 100),
        [
            Fluid.of('tfc:metal/steel', 20),
            Fluid.of('tfc:metal/brass', 15),
            Fluid.of('tfc:metal/rose_gold', 15),
            Fluid.of('tfc:metal/black_steel', 50)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_weak_red_steel")

    // 脆蓝钢 钢20 纹银15 铋铜15 黑钢30
    createmetallurgy.alloying(
        Fluid.of('tfc:metal/weak_blue_steel', 100),
        [
            Fluid.of('tfc:metal/steel', 20),
            Fluid.of('tfc:metal/sterling_silver', 15),
            Fluid.of('tfc:metal/bismuth_bronze', 15),
            Fluid.of('tfc:metal/black_steel', 50)
        ])
        .heatRequirement("superheated")
        .processingTime(40)
        .id("kubejs:create_alloy_weak_blue_steel")
})
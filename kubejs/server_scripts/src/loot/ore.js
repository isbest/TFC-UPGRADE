
// TFC 附属矿物应用时运
const TFC_ADDONE_ORE_FORTUNE = [
    // 铬
    { tag: '#firmalife:ores/chromite/poor', drop: 'firmalife:ore/poor_chromite' },
    { tag: '#firmalife:ores/chromite/normal', drop: 'firmalife:ore/normal_chromite' },
    { tag: '#firmalife:ores/chromite/rich', drop: 'firmalife:ore/rich_chromite' },
    // 铝土
    { tag: '#tfc_ie_addon:ores/bauxite/poor', drop: 'tfc_ie_addon:ore/poor_bauxite' },
    { tag: '#tfc_ie_addon:ores/bauxite/normal', drop: 'tfc_ie_addon:ore/normal_bauxite' },
    { tag: '#tfc_ie_addon:ores/bauxite/rich', drop: 'tfc_ie_addon:ore/rich_bauxite' },
    // 方铅
    { tag: '#tfc_ie_addon:ores/galena/poor', drop: 'tfc_ie_addon:ore/poor_galena' },
    { tag: '#tfc_ie_addon:ores/galena/normal', drop: 'tfc_ie_addon:ore/normal_galena' },
    { tag: '#tfc_ie_addon:ores/galena/rich', drop: 'tfc_ie_addon:ore/rich_galena' },
    // 沥青铀
    { tag: '#tfc_ie_addon:ores/uraninite/poor', drop: 'tfc_ie_addon:ore/poor_uraninite' },
    { tag: '#tfc_ie_addon:ores/uraninite/normal', drop: 'tfc_ie_addon:ore/normal_uraninite' },
    { tag: '#tfc_ie_addon:ores/uraninite/rich', drop: 'tfc_ie_addon:ore/rich_uraninite' },
]

// 矿石变体
const ORE_ROCK = [
    "granite",
    "diorite",
    "gabbro",
    "shale",
    "claystone",
    "conglomerate",
    "dolomite",
    "chert",
    "limestone",
    "marble",
    "gneiss",
    "schist",
    "phyllite",
    "slate",
    "dacite",
    "andesite",
    "basalt",
    "rhyolite",
    "chalk",
    "quartzite"
]

// 矿石变体  
const ORE_TYPE = [
    // 原生铜
    { block: 'poor_native_copper', drop: 'tfc:ore/poor_native_copper' },
    { block: 'normal_native_copper', drop: 'tfc:ore/normal_native_copper' },
    { block: 'rich_native_copper', drop: 'tfc:ore/rich_native_copper' },
    // 孔雀石
    { block: 'poor_malachite', drop: 'tfc:ore/poor_malachite' },
    { block: 'normal_malachite', drop: 'tfc:ore/normal_malachite' },
    { block: 'rich_malachite', drop: 'tfc:ore/rich_malachite' },
    // 黝铜
    { block: 'poor_tetrahedrite', drop: 'tfc:ore/poor_tetrahedrite' },
    { block: 'normal_tetrahedrite', drop: 'tfc:ore/normal_tetrahedrite' },
    { block: 'rich_tetrahedrite', drop: 'tfc:ore/rich_tetrahedrite' },
    // 赤铁
    { block: 'poor_hematite', drop: 'tfc:ore/poor_hematite' },
    { block: 'normal_hematite', drop: 'tfc:ore/normal_hematite' },
    { block: 'rich_hematite', drop: 'tfc:ore/rich_hematite' },
    // 褐铁
    { block: 'poor_limonite', drop: 'tfc:ore/poor_limonite' },
    { block: 'normal_limonite', drop: 'tfc:ore/normal_limonite' },
    { block: 'rich_limonite', drop: 'tfc:ore/rich_limonite' },
    // 磁铁
    { block: 'poor_magnetite', drop: 'tfc:ore/poor_magnetite' },
    { block: 'normal_magnetite', drop: 'tfc:ore/normal_magnetite' },
    { block: 'rich_magnetite', drop: 'tfc:ore/rich_magnetite' },
    // 原生金
    { block: 'poor_native_gold', drop: 'tfc:ore/poor_native_gold' },
    { block: 'normal_native_gold', drop: 'tfc:ore/normal_native_gold' },
    { block: 'rich_native_gold', drop: 'tfc:ore/rich_native_gold' },
    // 原生银
    { block: 'poor_native_silver', drop: 'tfc:ore/poor_native_silver' },
    { block: 'normal_native_silver', drop: 'tfc:ore/normal_native_silver' },
    { block: 'rich_native_silver', drop: 'tfc:ore/rich_native_silver' },
    // 锡
    { block: 'poor_cassiterite', drop: 'tfc:ore/poor_cassiterite' },
    { block: 'normal_cassiterite', drop: 'tfc:ore/normal_cassiterite' },
    { block: 'rich_cassiterite', drop: 'tfc:ore/rich_cassiterite' },
    // 辉铋
    { block: 'poor_bismuthinite', drop: 'tfc:ore/poor_bismuthinite' },
    { block: 'normal_bismuthinite', drop: 'tfc:ore/normal_bismuthinite' },
    { block: 'rich_bismuthinite', drop: 'tfc:ore/rich_bismuthinite' },
    // 绿镍
    { block: 'poor_garnierite', drop: 'tfc:ore/poor_garnierite' },
    { block: 'normal_garnierite', drop: 'tfc:ore/normal_garnierite' },
    { block: 'rich_garnierite', drop: 'tfc:ore/rich_garnierite' },
    // 闪锌
    { block: 'poor_sphalerite', drop: 'tfc:ore/poor_sphalerite' },
    { block: 'normal_sphalerite', drop: 'tfc:ore/normal_sphalerite' },
    { block: 'rich_sphalerite', drop: 'tfc:ore/rich_sphalerite' },
    // 黄铁矿
    { block: 'pyrite', drop: 'tfc:ore/pyrite' },
    // 红宝石
    { block: 'ruby', drop: 'tfc:ore/ruby' },
    // 蓝宝石
    { block: 'sapphire', drop: 'tfc:ore/sapphire' },
    // 硝石
    { block: 'saltpeter', drop: 'tfc:ore/saltpeter' },
    // 石膏
    { block: 'gypsum', drop: 'tfc:ore/gypsum' },
    // 冰晶石
    { block: 'cryolite', drop: 'tfc:ore/cryolite' },
    // 朱砂
    { block: 'cinnabar', drop: 'tfc:ore/cinnabar' },
    // 硫磺
    { block: 'sulfur', drop: 'tfc:ore/sulfur' },
    // 石墨
    { block: 'graphite', drop: 'tfc:ore/graphite' },
    // 钾石盐
    { block: 'sylvite', drop: 'tfc:ore/sylvite' },
    // 黄玉
    { block: 'topaz', drop: 'tfc:ore/topaz' },
    // 石盐
    { block: 'halite', drop: 'tfc:ore/halite' },
    // 金伯利
    { block: 'diamond', drop: 'tfc:ore/diamond' },
    // 紫水晶
    { block: 'amethyst', drop: 'tfc:ore/amethyst' },
    // 蛋白石
    { block: 'opal', drop: 'tfc:ore/opal' }
]

ServerEvents.blockLootTables(event => {
    TFC_ADDONE_ORE_FORTUNE.forEach(item => {
        // 为特定的矿物设置掉落表
        event.addBlock(item.tag, table => {
            table.addPool(pool => {
                pool.addEntry({
                    type: 'minecraft:item', // 指定掉落物类型
                    name: item.drop, // 掉落物的名称
                    functions: [
                        {
                            function: 'minecraft:apply_bonus', // 应用附魔加成
                            enchantment: 'minecraft:fortune', // 时运附魔
                            formula: 'minecraft:ore_drops' // 标准矿物附魔掉落公式
                        },
                        {
                            function: 'minecraft:explosion_decay' // 处理爆炸时的掉落情况
                        }
                    ]
                })
            })
        })
    })

    ORE_ROCK.forEach(rock => {
        ORE_TYPE.forEach(ore => {
            let raw_ore = `tfc:ore/${ore.block}/${rock}`
            // 为特定的矿物设置掉落表
            event.addBlock(raw_ore, table => {
                table.addPool(pool => {
                    pool.addEntry({
                        type: 'minecraft:item',
                        name: ore.drop,
                        functions: [
                            {
                                function: 'minecraft:apply_bonus',
                                enchantment: 'minecraft:fortune',
                                formula: 'minecraft:ore_drops'
                            },
                            {
                                function: 'minecraft:explosion_decay'
                            }
                        ]
                    })
                })
            })
        })
    })

})

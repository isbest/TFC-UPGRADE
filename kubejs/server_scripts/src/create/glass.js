ServerEvents.recipes(event => {
    const GLASS = [
        // 无色玻璃
        { source: 'tfc:silica_glass_batch', output: 'minecraft:glass', dye: [] },
        // 白色
        { source: '#tfc:glass_batches_tier_2', output: 'minecraft:white_stained_glass', dye: ['tfc:powder/soda_ash'] },
        // 淡灰色
        { source: '#tfc:glass_batches', output: 'minecraft:light_gray_stained_glass', dye: ['tfc:powder/soda_ash', 'tfc:powder/soda_ash', 'tfc:powder/graphite'] },
        // 灰色
        { source: '#tfc:glass_batches', output: 'minecraft:gray_stained_glass', dye: ['tfc:powder/soda_ash', 'tfc:powder/graphite'] },
        // 黑色
        { source: '#tfc:glass_batches', output: 'minecraft:black_stained_glass', dye: ['tfc:powder/graphite'] },
        // 棕色
        { source: '#tfc:glass_batches', output: 'minecraft:brown_stained_glass', dye: ['tfc:powder/garnierite'] },
        // 红色
        { source: '#tfc:glass_batches_tier_2', output: 'minecraft:red_stained_glass', dye: ['tfc:powder/cassiterite'] },
        // 橙色
        { source: 'tfc:hematitic_glass_batch', output: 'minecraft:orange_stained_glass', dye: [] },
        // 黄色
        { source: '#tfc:glass_batches_tier_2', output: 'minecraft:yellow_stained_glass', dye: ['tfc_ie_addon:powder/galena'] },
        // 黄绿色
        { source: '#tfc:glass_batches_tier_2', output: 'minecraft:lime_stained_glass', dye: ['tfc:powder/hematite', 'tfc:powder/soda_ash'] },
        { source: '#tfc:glass_batches_tier_2', output: 'minecraft:lime_stained_glass', dye: ['tfc:powder/magnetite', 'tfc:powder/soda_ash'] },
        { source: '#tfc:glass_batches_tier_2', output: 'minecraft:lime_stained_glass', dye: ['tfc:powder/limonite', 'tfc:powder/soda_ash'] },
        // 绿色
        { source: 'tfc:olivine_glass_batch', output: 'minecraft:green_stained_glass', dye: [] },
        // 青色
        { source: '#tfc:glass_batches_tier_3', output: 'minecraft:cyan_stained_glass', dye: ['tfc:powder/sapphire', 'tfc:powder/tetrahedrite'] },
        { source: '#tfc:glass_batches_tier_3', output: 'minecraft:cyan_stained_glass', dye: ['tfc:powder/sapphire', 'tfc:powder/malachite'] },
        { source: '#tfc:glass_batches_tier_3', output: 'minecraft:cyan_stained_glass', dye: ['tfc:powder/sapphire', 'tfc:powder/native_copper'] },
        // 淡蓝色
        { source: 'tfc:silica_glass_batch', output: 'minecraft:light_blue_stained_glass', dye: ['tfc:powder/lapis_lazuli'] },
        // 蓝色
        { source: 'tfc:volcanic_glass_batch', output: 'minecraft:blue_stained_glass', dye: [] },
        // 紫色
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/limonite', 'tfc:powder/native_copper'] },
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/limonite', 'tfc:powder/malachite'] },
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/limonite', 'tfc:powder/tetrahedrite'] },
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/magnetite', 'tfc:powder/native_copper'] },
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/magnetite', 'tfc:powder/malachite'] },
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/magnetite', 'tfc:powder/tetrahedrite'] },
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/hematite', 'tfc:powder/native_copper'] },
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/hematite', 'tfc:powder/malachite'] },
        { source: '#tfc:glass_batches', output: 'minecraft:purple_stained_glass', dye: ['tfc:powder/hematite', 'tfc:powder/tetrahedrite'] },
        // 品红
        { source: '#tfc:glass_batches_tier_2', output: 'minecraft:magenta_stained_glass', dye: ['tfc:powder/ruby'] },
        // 粉红
        { source: 'tfc:silica_glass_batch', output: 'minecraft:pink_stained_glass', dye: ['tfc:powder/native_gold'] },
    ]

    // 'tfc:powder/soda_ash'

    GLASS.forEach(item => {
        let id = 'kubejs:glass/' + item.output.replace(/:|\//g, '_') + item.dye.map(i => i.replace(/:|\//g, '_')).join('_')
        item.dye.push(item.source)

        event.recipes.create.compacting(
            item.output,
            item.dye
        ).lowheated()
            .id(id)
    })

    // 宝石锯 切割玻璃

    const GLASSES = [
        "glass",
        "white_stained_glass",
        "light_gray_stained_glass",
        "gray_stained_glass",
        "black_stained_glass",
        "brown_stained_glass",
        "red_stained_glass",
        "orange_stained_glass",
        "yellow_stained_glass",
        "lime_stained_glass",
        "green_stained_glass",
        "cyan_stained_glass",
        "light_blue_stained_glass",
        "blue_stained_glass",
        "purple_stained_glass",
        "magenta_stained_glass",
        "pink_stained_glass"
    ]

    // 宝石据切割成玻璃板
    GLASSES.forEach(item => {
        event.shapeless(
            `4x minecraft:${item}_pane`,
            [
                `minecraft:${item}`,
                'tfc:gem_saw',
            ]
        ).damageIngredient({ item: 'tfc:gem_saw' }, 1)
    })
})
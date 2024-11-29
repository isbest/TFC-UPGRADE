// priority: 10
ServerEvents.recipes(event => {
    // 钢铲
    event.replaceInput({ id: 'tfc_hammer_time:crafting/metal/excavator/steel' }, 'tfc:metal/rod/steel', '#forge:rods/steel')

    let { tfc } = event.recipes

    // 铁栅栏配方
    tfc.anvil('8x minecraft:iron_bars', 'tfc:metal/sheet/wrought_iron', [
        "hit_last",
        "hit_second_last",
        "hit_third_last"
    ]).tier(3).bonus(false)

    tfc.anvil('16x minecraft:iron_bars', 'tfc:metal/double_sheet/wrought_iron', [
        "hit_last",
        "hit_second_last",
        "hit_third_last"
    ]).tier(3).bonus(false)

    // 铁活扳门
    tfc.anvil('4x minecraft:iron_trapdoor', 'tfc:metal/sheet/wrought_iron', [
        "hit_last",
        "hit_second_last",
        "hit_third_last"
    ]).tier(3).bonus(false)


    const { firmalife } = event.recipes
    // 干燥海带
    firmalife.drying('minecraft:dried_kelp', 'tfc:plant/leafy_kelp').id('firmalife:dried_kelp/leafy_kelp')
    firmalife.drying('minecraft:dried_kelp', 'tfc:plant/winged_kelp').id('firmalife:dried_kelp/winged_kelp')
    firmalife.drying('minecraft:dried_kelp', 'tfc:plant/giant_kelp_flower').id('firmalife:dried_kelp/giant_kelp_flower')

    // 纸浆
    // ['minecraft:bamboo', 'immersiveengineering:dust_wood', 'tfc:jute_fiber']
    tfc.barrel_instant()
        .inputItem('#kubejs:pulpable')
        .inputFluid(Fluid.of('tfc:limewater', 500))
        .outputFluid(Fluid.of('kubejs:pulp', 500))
        .id('tfc:barrel/pulp')
    // 湿纸 加入木棍堆，瞬时变成湿纸
    tfc.barrel_instant()
        .outputItem('4x kubejs:wet_paper')
        .inputItem('tfc:stick_bunch')
        .inputFluid(Fluid.of('kubejs:pulp', 500))
        .id('tfc:barrel/wet_paper')
    // 干燥湿纸为纸
    firmalife.drying('minecraft:paper', 'kubejs:wet_paper').id('firmalife:/paper_from_wet_paper')
})


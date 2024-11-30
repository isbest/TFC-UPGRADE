ServerEvents.recipes(event => {
    // 挤压机
    event.remove({ type: 'immersiveengineering:squeezer' })
    // 工业发酵机器
    event.remove({ type: 'immersiveengineering:fermenter' })

    // 石墨粉
    event.recipes.create.compacting(
        'immersiveengineering:dust_hop_graphite',
        '#forge:dusts/coal_coke'
    ).id('kubejs:dust_hop_graphite')

    // 石墨锭
    event.recipes.create.compacting(
        'immersiveengineering:ingot_hop_graphite',
        'immersiveengineering:dust_hop_graphite',
    )
        .lowheated()
        .id('kubejs:ingot_hop_graphite')
})
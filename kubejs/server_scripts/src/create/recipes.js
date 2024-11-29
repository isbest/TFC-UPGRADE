// priority: 10
const IE_DUSTS_CREATE_CRUSHING_WHEEL = [
    { input: '#forge:ingots/copper', output: 'immersiveengineering:dust_copper' },
    { input: '#forge:ingots/aluminum', output: 'immersiveengineering:dust_aluminum' },
    { input: '#forge:ingots/lead', output: 'immersiveengineering:dust_lead' },
    { input: '#forge:ingots/silver', output: 'immersiveengineering:dust_silver' },
    { input: '#forge:ingots/nickel', output: 'immersiveengineering:dust_nickel' },
    { input: '#forge:ingots/uranium', output: 'immersiveengineering:dust_uranium' },
    { input: 'immersiveengineering:ingot_constantan', output: 'immersiveengineering:dust_constantan' },
    { input: 'immersiveengineering:ingot_electrum', output: 'immersiveengineering:dust_electrum' },
    { input: '#forge:ingots/steel', output: 'immersiveengineering:dust_steel' },
    { input: 'tfc:metal/ingot/wrought_iron', output: 'immersiveengineering:dust_iron' },
    { input: '#forge:ingots/gold', output: 'immersiveengineering:dust_gold' }
]

ServerEvents.recipes(event => {
    const { create } = event.recipes

    IE_DUSTS_CREATE_CRUSHING_WHEEL.forEach(item => {
        create.crushing(item.output, item.input)
    })

    // 精密构件 100%
    create.sequenced_assembly(
        'create:precision_mechanism',
        '#forge:plates/gold',
        [
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                ['create:incomplete_precision_mechanism', 'create:cogwheel']
            ),
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                ['create:incomplete_precision_mechanism', 'create:large_cogwheel']
            ),
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget']
            )
        ])
        .transitionalItem('create:incomplete_precision_mechanism')
        .loops(5)
        .id('create:sequenced_assembly/precision_mechanism')

    // 轨道
    create.sequenced_assembly(
        'create:track',
        '#create:sleepers',
        [
            event.recipes.createDeploying(
                'create:incomplete_track',
                ['create:incomplete_track', ['#forge:nuggets/iron', '#forge:nuggets/zinc']]
            ),
            event.recipes.createDeploying(
                'create:incomplete_track',
                ['create:incomplete_track', ['#forge:nuggets/iron', '#forge:nuggets/zinc']]
            ),
        ])
        .transitionalItem('create:incomplete_track')
        .loops(2)
        .id('create:sequenced_assembly/track')

    // 控制芯片100% 创意传动
    create.sequenced_assembly(
        'create_connected:control_chip',
        '#forge:plates/gold',
        [
            event.recipes.createDeploying(
                'create_connected:incomplete_control_chip',
                ['create_connected:incomplete_control_chip', 'create:electron_tube']
            ),
            event.recipes.createDeploying(
                'create_connected:incomplete_control_chip',
                ['create_connected:incomplete_control_chip', 'minecraft:redstone']
            ),
            event.recipes.createPressing(
                'create_connected:incomplete_control_chip',
                ['create_connected:incomplete_control_chip']
            )
        ])
        .transitionalItem('create_connected:incomplete_control_chip')
        .loops(3)
        .id('create_connected:sequenced_assembly/control_chip')


    // 刷铁机
    create.splashing([
        Item.of('minecraft:flint').withChance(0.2),
        Item.of('tfcorewashing:chunks_limonite').withChance(0.2)
    ],
        'minecraft:gravel'
    ).id('create:splashing/gravel')

    // 洗岩浆块
    create.splashing('minecraft:obsidian', '#kubejs:magma_block').id('create:splashing/magma_block')
})
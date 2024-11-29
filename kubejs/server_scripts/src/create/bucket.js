// priority: 10
ServerEvents.recipes(event => {
    // 铁桶
    event.recipes.create.sequenced_assembly(
        [
            Item.of('minecraft:bucket').withChance(0.5),
            Item.of('minecraft:iron_nugget').withChance(0.3),
            Item.of('tfc:metal/bars/wrought_iron').withChance(0.2)
        ],
        'tfc:metal/ingot/wrought_iron',
        [
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                ['create:incomplete_precision_mechanism', 'tfc:metal/hammer/red_steel']
            ),
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                ['create:incomplete_precision_mechanism', 'tfc:metal/hammer/blue_steel']
            ),
            event.recipes.createPressing(
                'create:incomplete_precision_mechanism',
                'create:incomplete_precision_mechanism'
            )
        ])
        .transitionalItem('create:incomplete_precision_mechanism')
        .loops(3)
        .id('kubejs:bucket')
})
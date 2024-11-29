// priority: 10
ServerEvents.recipes(event => {
    // 锻铁锭
    event.recipes.create.sequenced_assembly(
        'tfc:metal/ingot/high_carbon_blue_steel',
        'tfc:metal/ingot/weak_blue_steel',
        [
            event.recipes.createDeploying(
                'create:incomplete_precision_mechanism',
                ['create:incomplete_precision_mechanism', 'tfc:metal/ingot/black_steel']
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
        .loops(1)
        .id('kubejs:high_carbon_blue_steel')

    event.recipes.create.sequenced_assembly(
        'tfc:metal/ingot/blue_steel',
        'tfc:metal/ingot/high_carbon_blue_steel',
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
        .loops(2)
        .id('kubejs:blue_steel')
})
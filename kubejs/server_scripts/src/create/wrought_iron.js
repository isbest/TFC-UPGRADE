// priority: 10
ServerEvents.recipes(event => {
    // 锻铁锭
    event.recipes.create.sequenced_assembly(
        'tfc:refined_iron_bloom',
        'tfc:raw_iron_bloom',
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
        .id('kubejs:refined_iron_bloom')

    event.recipes.create.sequenced_assembly(
        'tfc:metal/ingot/wrought_iron',
        'tfc:refined_iron_bloom',
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
        .id('kubejs:wrought_iron')
})
StartupEvents.registry('item', event => {
    event.create('kubejs:crystal_seed_certus1')
        .texture('kubejs:item/crystal_seed_certus1')
        .displayName('石英种子')
    event.create('kubejs:crystal_seed_certus2')
        .texture('kubejs:item/crystal_seed_certus2')
        .displayName('石英小晶体')
    event.create('kubejs:crystal_seed_certus3')
        .texture('kubejs:item/crystal_seed_certus3')
        .displayName('石英大晶体')

    // 注册湿纸
    event.create('kubejs:wet_paper')
        .texture('kubejs:item/wet_paper')
        .displayName('湿纸')
})

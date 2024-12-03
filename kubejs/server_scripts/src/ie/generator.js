ServerEvents.recipes(event => {
    // 允许柴油发电机烧汽油
    event.custom({
        "type": "immersiveengineering:generator_fuel",
        "burnTime": 200,
        "fluidTag": "forge:gasoline"
    }).id('kubejs:generator/gasoline')
    // 允许柴油发电机烧柴油
    event.custom({
        "type": "immersiveengineering:generator_fuel",
        "burnTime": 300,
        "fluidTag": "forge:diesel"
    }).id('kubejs:generator/diesel')
})
// priority: 10
ServerEvents.recipes(event => {
    // 重生锚配方
    event.replaceInput(
        {id: 'minecraft:respawn_anchor'},
        "minecraft:glowstone",
        "minecraft:diamond_block"
    )

    event.shaped('create_power_loader:andesite_chunk_loader', [
        "GGG",
        "GRG",
        "CSC"
    ], {
        "G": "#forge:glass",
        "R": "minecraft:respawn_anchor",
        "S": "create:shaft",
        "C": "create:andesite_casing"
    }).id("create_power_loader:crafting/empty_andesite_chunk_loader")

    event.remove({ id: "create:conversion_0" })

    event.recipes.create.mechanical_crafting(
        'create_power_loader:brass_chunk_loader',
        [
            "GGGGG",
            "G   G",
            "G R G",
            "CPPPC",
            "CCSCC"
        ],
        {
            "G": "#forge:glass",
            "R": "minecraft:respawn_anchor",
            "S": "create:shaft",
            "C": "create:brass_casing",
            "P": "create:precision_mechanism"
        }
    ).id("create_power_loader:crafting/empty_brass_chunk_loader")
})
ServerEvents.recipes(event => {
    event.remove({id:'createmetallurgy:cokes_from_block'}),

    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "results": [
            {
                "item": "immersiveengineering:coal_coke"
            }
        ],
        "additives": [],
        "input": {
            "item": "minecraft:charcoal"
        },
        "time": 400,
        "energy": 204800
    }).id("kubejs:cocal_cake_from_charcoal")
    // event.custom({
    //     "type": "immersiveengineering:arc_furnace",
    //     "results": [
    //         {
    //             "item": "immersiveengineering:coal_coke"
    //         }
    //     ],
    //     "additives": [],
    //     "input": {
    //         "item": "tfc:ore/bituminous_coal"
    //     },
    //     "time": 400,
    //     "energy": 204800
    // }).id("kubejs:cocal_cake_from_bituminous_coal")
    // event.custom({
    //     "type": "immersiveengineering:arc_furnace",
    //     "results": [
    //         {
    //             "item": "immersiveengineering:coal_coke"
    //         }
    //     ],
    //     "additives": [],
    //     "input": {
    //         "item": "tfc:ore/lignite"
    //     },
    //     "time": 400,
    //     "energy": 204800
    // }).id("kubejs:cocal_cake_from_lignite")
})

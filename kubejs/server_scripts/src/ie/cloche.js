// priority: 10
const DISABLE_CLOCHE = [
    'immersiveengineering:cloche/cactus',
    'immersiveengineering:cloche/sugar_cane',
    'immersiveengineering:fertilizer/fertilizer', // 工业肥料
]

const RICH_SOIL_CLOCHE = [
    { seed: 'tfc:seeds/wheat', output: 'tfc:food/wheat', render: 'tfc:crop/wheat', o_count: 2 },
    { seed: 'tfc:seeds/tomato', output: 'tfc:food/tomato', render: 'tfc:crop/tomato', o_count: 2 },
    { seed: 'tfc:seeds/sugarcane', output: 'tfc:food/sugarcane', render: 'tfc:crop/sugarcane', o_count: 2 },
    { seed: 'tfc:seeds/squash', output: 'tfc:food/squash', render: 'tfc:crop/squash', o_count: 2 },
    { seed: 'tfc:seeds/soybean', output: 'tfc:food/soybean', render: 'tfc:crop/soybean', o_count: 2 },
    { seed: 'tfc:seeds/rye', output: 'tfc:food/rye', render: 'tfc:crop/rye', o_count: 2 },
    { seed: 'tfc:seeds/rice', output: 'tfc:food/rice', render: 'tfc:crop/rice', o_count: 2 },
    { seed: 'tfc:seeds/pumpkin', output: 'tfc:pumpkin', render: 'tfc:crop/pumpkin', o_count: 2 },
    { seed: 'tfc:seeds/potato', output: 'tfc:food/potato', render: 'tfc:crop/potato', o_count: 2 },
    { seed: 'tfc:seeds/onion', output: 'tfc:food/onion', render: 'tfc:crop/onion', o_count: 2 },
    { seed: 'tfc:seeds/oat', output: 'tfc:food/oat', render: 'tfc:crop/oat', o_count: 2 },
    { seed: 'tfc:seeds/melon', output: 'tfc:melon', render: 'tfc:crop/melon', o_count: 2 },
    { seed: 'tfc:seeds/maize', output: 'tfc:food/maize', render: 'tfc:crop/maize', o_count: 2 },
    { seed: 'tfc:seeds/jute', output: 'tfc:jute', render: 'tfc:crop/jute', o_count: 2 },
    { seed: 'tfc:seeds/green_bean', output: 'tfc:food/green_bean', render: 'tfc:crop/green_bean', o_count: 2 },
    { seed: 'tfc:seeds/garlic', output: 'tfc:food/garlic', render: 'tfc:crop/garlic', o_count: 2 },
    { seed: 'tfc:seeds/carrot', output: 'tfc:food/carrot', render: 'tfc:crop/carrot', o_count: 2 },
    { seed: 'tfc:seeds/cabbage', output: 'tfc:food/cabbage', render: 'tfc:crop/cabbage', o_count: 2 },
    { seed: 'tfc:seeds/beet', output: 'tfc:food/beet', render: 'tfc:crop/beet', o_count: 2 },
    { seed: 'tfc:seeds/barley', output: 'tfc:food/barley', render: 'tfc:crop/barley', o_count: 2 },
    { seed: 'tfc:seeds/papyrus', output: 'tfc:papyrus', render: 'tfc:crop/papyrus', o_count: 2 },
    { seed: 'tfc:seeds/red_bell_pepper', output: 'tfc:food/red_bell_pepper', render: 'tfc:crop/red_bell_pepper', o_count: 2 },
    { seed: 'tfc:seeds/yellow_bell_pepper', output: 'tfc:food/yellow_bell_pepper', render: 'tfc:crop/yellow_bell_pepper', o_count: 2 },
]

ServerEvents.recipes(event => {
    DISABLE_CLOCHE.forEach(item => {
        event.remove({ id: item })
    })

    const soil = 'farmersdelight:rich_soil';
    //沃土加速,暂定0.8
    const time = 12800 * 0.8;
    RICH_SOIL_CLOCHE.forEach(item => {
        let id = "kubejs:cloche_" + item.seed.replace(/:| \//g, '_')
        event.custom({
            "type": "immersiveengineering:cloche",
            "results": [{ "item": item.output, "count": item.o_count }, { "item": item.seed }],
            "input": { "item": item.seed },
            "soil": { "item": soil },
            "time": time,
            "render": { "type": "crop", "block": item.render }
        })
        .id(id)
    })

    // 堆肥5.0生长倍率
    event.custom({
        "type": "immersiveengineering:fertilizer",
        "growthModifier": 5.0,
        "input": {
            "item": "tfc:compost"
        }
    })

    // 腐烂堆肥2.5
    event.custom({
        "type": "immersiveengineering:fertilizer",
        "growthModifier": 5.0,
        "input": {
            "item": "tfc:rotten_compost"
        }
    })
})
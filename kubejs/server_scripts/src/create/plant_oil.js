ServerEvents.recipes(event => {
    const DISABLE_RECIPES = [
        'immersiveengineering:refinery/biodiesel',
        'createdieselgenerators:basin_fermenting/fermentable',
    ]

    DISABLE_RECIPES.forEach(item => {

        event.remove({ id: item })
    })

    // 修改种子
    event.recipes.create.compacting(
        Fluid.of('createdieselgenerators:plant_oil', 100),
        '#tfc:seeds'
    ).id('createdieselgenerators:compacting/plant_oil')

    // 水果发酵乙醇
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
                "tag": "tfc:foods/fruits"
            },
            {
                "fluid": "firmalife:yeast_starter",
                "amount": 10
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "fluid": "createdieselgenerators:ethanol",
                "amount": 50
            }
        ]
    }).id('kubejs:fermentable/fruits')

    // 麦粒发酵
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
                "tag": "tfc:foods/grains"
            },
            {
                "fluid": "firmalife:yeast_starter",
                "amount": 20
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "fluid": "createdieselgenerators:ethanol",
                "amount": 200
            }
        ]
    }).id('kubejs:fermentable/grains')

    // 蔬菜发酵
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
                "tag": "tfc:foods/vegetables"
            },
            {
                "fluid": "firmalife:yeast_starter",
                "amount": 20
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "fluid": "createdieselgenerators:ethanol",
                "amount": 100
            }
        ]
    }).id('kubejs:fermentable/vegetables')

    // 酵种制作
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
                "tag": "tfc:foods/flour"
            },
            {
                "fluid": "firmalife:yeast_starter",
                "amount": 10
            }
        ],
        "processingTime": 1200,
        "results": [
            {
                "fluid": "firmalife:yeast_starter",
                "amount": 100
            }
        ]
    }).id('kubejs:yeast_starter')
})

ServerEvents.tags('fluid', event => {
    // 给大豆油加上植物油的标签
    event.add('forge:plantoil', ['firmalife:soybean_oil'])
})
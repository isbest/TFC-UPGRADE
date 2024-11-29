// priority: 10
ServerEvents.tags('item', event => {
    // 炒菜,鸡蛋
    event.add('forge:eggs',
        [
            'minecraft:egg',
            'tfc:food/cooked_egg',
            'tfc:food/boiled_egg'
        ]
    )
})
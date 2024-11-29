// priority: 0

ServerEvents.recipes(event => {
    // 沃土
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "tag": "minecraft:dirt"
            },
            {
                "tag": "forge:straw"
            },
            {
                "tag": "forge:straw"
            },
            {
                "item": "minecraft:bone_meal"
            },
            {
                "item": "minecraft:bone_meal"
            },
            {
                "tag": "forge:dusts/wood"
            },
            {
                "tag": "forge:dusts/wood"
            },
            {
                "tag": "forge:dusts/wood"
            },
            {
                "tag": "forge:dusts/wood"
            }
        ],
        "result": {
            "item": "farmersdelight:organic_compost"
        }
    }).id("farmersdelight:organic_compost_from_tree_bark")

    // 下届石英
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "minecraft:quartz_block"
            }
        ],
        "result": [
            {
                "count": 4,
                "item": "tfc_ie_addon:mineral/quartz_shard"
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "pickaxe_dig"
        }
    }).id("farmersdelight:cutting/quartz_block")

    // 煎锅目前没有用处

    // 炒菜配方
    // 什锦炒饭
    event.custom({
        "type": "cuisinedelight:plate_cuisine",
        "holderItem": "cuisinedelight:mixed_fried_rice",
        "list": [
            {
                "bonus": 0.1,
                "ingredient": {
                    "item": "tfc:food/rice_grain"
                },
                "max": 1.6,
                "min": 0.4,
                "score": 1.0
            }
        ],
        "saturationBonus": 0.0,
        "saturationBonusModifier": 0.0
    }).id('cuisinedelight:mixed_fried_rice')

    // 炒饭
    event.custom({
        "type": "cuisinedelight:plate_cuisine",
        "holderItem": "cuisinedelight:fried_rice",
        "list": [
            {
                "bonus": 0.1,
                "ingredient": {
                    "item": "tfc:food/rice_grain"
                },
                "max": 1.25,
                "min": 0.75,
                "score": 2.0
            }
        ],
        "saturationBonus": 0.0,
        "saturationBonusModifier": 0.0
    }).id('cuisinedelight:fried_rice')

    //火腿炒饭
    event.custom({
        "type": "cuisinedelight:plate_cuisine",
        "holderItem": "cuisinedelight:ham_fried_rice",
        "list": [
            {
                "bonus": 0.2,
                "ingredient": {
                    "item": "tfc:food/rice_grain"
                },
                "max": 1.6,
                "min": 0.4,
                "score": 2.0
            },
            {
                "bonus": 0.2,
                "ingredient": {
                    "item": "farmersdelight:ham"
                },
                "max": 1.8,
                "min": 0.2,
                "score": 1.0
            }
        ],
        "saturationBonus": 0.0,
        "saturationBonusModifier": 0.0
    }).id("cuisinedelight:ham_fried_rice")

    // 西瓜炒肉
    event.custom({
        "type": "cuisinedelight:plate_cuisine",
        "holderItem": "cuisinedelight:fried_meat_and_melon",
        "list": [
            {
                "bonus": 0.1,
                "ingredient": {
                    "type": "cuisinedelight:food_type",
                    "foodType": "MEAT"
                },
                "max": 1.6,
                "min": 0.4,
                "score": 1.0
            },
            {
                "bonus": 0.1,
                "ingredient": {
                    "item": "tfc:food/melon_slice"
                },
                "max": 1.8,
                "min": 0.2,
                "score": 2.0
            }
        ],
        "saturationBonus": 0.0,
        "saturationBonusModifier": 0.0
    }).id("cuisinedelight:fried_meat_and_melon")

    // 蔬菜炒饭
    event.custom({
        "type": "cuisinedelight:plate_cuisine",
        "holderItem": "cuisinedelight:vegetable_fried_rice",
        "list": [
            {
                "bonus": 0.1,
                "ingredient": {
                    "item": "tfc:food/rice_grain"
                },
                "max": 1.6,
                "min": 0.4,
                "score": 1.0
            },
            {
                "bonus": 0.1,
                "ingredient": {
                    "type": "cuisinedelight:food_type",
                    "foodType": "VEG"
                },
                "max": 1.7,
                "min": 0.3,
                "score": 1.0
            }
        ],
        "saturationBonus": 0.0,
        "saturationBonusModifier": 0.0
    }).id('cuisinedelight:vegetable_fried_rice')

    // 番茄炒蛋
    event.custom({
        "type": "cuisinedelight:plate_cuisine",
        "holderItem": "cuisinedelight:scrambled_egg_and_tomato",
        "list": [
            {
                "bonus": 0.1,
                "ingredient": {
                    "tag": "forge:eggs"
                },
                "max": 1.7,
                "min": 0.3,
                "score": 1.0
            },
            {
                "bonus": 0.1,
                "ingredient": {
                    "item": "tfc:food/tomato"
                },
                "max": 1.7,
                "min": 0.3,
                "score": 2.0
            }
        ],
        "saturationBonus": 0.0,
        "saturationBonusModifier": 0.0
    }).id('cuisinedelight:scrambled_egg_and_tomato')
    // 肉粒炒饭
    event.custom({
        "type": "cuisinedelight:plate_cuisine",
        "holderItem": "cuisinedelight:meat_fried_rice",
        "list": [
            {
                "bonus": 0.1,
                "ingredient": {
                    "item": "tfc:food/rice_grain"
                },
                "max": 1.6,
                "min": 0.4,
                "score": 1.0
            },
            {
                "bonus": 0.1,
                "ingredient": {
                    "type": "cuisinedelight:food_type",
                    "foodType": "MEAT"
                },
                "max": 1.7,
                "min": 0.3,
                "score": 1.0
            }
        ],
        "saturationBonus": 0.0,
        "saturationBonusModifier": 0.0
    }).id("cuisinedelight:meat_fried_rice")

    // 海鲜炒饭
    event.custom({
        "type": "cuisinedelight:plate_cuisine",
        "holderItem": "cuisinedelight:seafood_fried_rice",
        "list": [
            {
                "bonus": 0.1,
                "ingredient": {
                    "item": "tfc:food/rice_grain"
                },
                "max": 1.6,
                "min": 0.4,
                "score": 1.0
            },
            {
                "bonus": 0.1,
                "ingredient": {
                    "type": "cuisinedelight:food_type",
                    "foodType": "SEAFOOD"
                },
                "max": 1.7,
                "min": 0.3,
                "score": 1.0
            }
        ],
        "saturationBonus": 0.0,
        "saturationBonusModifier": 0.0
    }).id("cuisinedelight:seafood_fried_rice")
})
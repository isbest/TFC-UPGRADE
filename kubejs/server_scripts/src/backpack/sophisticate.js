// priority: 10
ServerEvents.recipes(event => {
    const DISABLE_RECIPES = [
        'sophisticatedbackpacks:pickup_upgrade',
        'sophisticatedbackpacks:filter_upgrade',
        'sophisticatedbackpacks:magnet_upgrade',
        'sophisticatedbackpacks:advanced_magnet_upgrade',
        'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic',
        'sophisticatedbackpacks:feeding_upgrade',
        'sophisticatedbackpacks:void_upgrade',
        'sophisticatedbackpacks:inception_upgrade',
        'sophisticatedbackpacks:refill_upgrade',
        'sophisticatedbackpacks:backpack'
    ]
    DISABLE_RECIPES.forEach(item => {
        event.remove({ id: item })
    })

    // 背包由tfc背包合成
    event.shaped(
        'sophisticatedbackpacks:backpack',
        [
            "SLS",
            "SBS",
            "LLL",
        ],
        {
            "S": "#forge:string",
            "L": "#forge:leather",
            "B": "tfc_knapsacks:backpack"
        }
    ).id("kubejs:backpack")

    // 铁背包
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "type": "sophisticatedcore:item_enabled",
                "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
            }
        ],
        "key": {
            "B": {
                "item": "sophisticatedbackpacks:copper_backpack"
            },
            "I": {
                "item": 'tfc:metal/ingot/wrought_iron'
            }
        },
        "pattern": [
            " I ",
            "IBI",
            " I "
        ],
        "result": {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
    }).id("sophisticatedbackpacks:iron_backpack_from_copper")
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "type": "sophisticatedcore:item_enabled",
                "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
            }
        ],
        "key": {
            "B": {
                "item": "sophisticatedbackpacks:backpack"
            },
            "I": {
                "item": 'tfc:metal/ingot/wrought_iron'
            }
        },
        "pattern": [
            "III",
            "IBI",
            "III"
        ],
        "result": {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
    }).id("sophisticatedbackpacks:iron_backpack")

    // 拾取升级
    event.shaped(
        'sophisticatedbackpacks:pickup_upgrade',
        [
            " D ",
            "GPG",
            "RRR"
        ],
        {
            "D": "#forge:gems/diamond",
            "G": "#forge:ingots/gold",
            "P": "sophisticatedbackpacks:upgrade_base",
            "R": 'create_new_age:magnetite_block',
        }
    ).id("kubejs:pickup_upgrade")

    // 过滤升级
    event.shaped(
        'sophisticatedbackpacks:filter_upgrade',
        [
            "RSR",
            "SBS",
            "RSR"
        ],
        {
            "B": "sophisticatedbackpacks:upgrade_base",
            "S": "#forge:string",
            "R": 'tfc:gem/pyrite',
        }
    ).id("kubejs:filter_upgrade")

    // 磁铁升级 sophisticatedbackpacks:magnet_upgrade
    event.shaped(
        'sophisticatedbackpacks:magnet_upgrade',
        [
            " I ",
            "IPI",
            "L L"
        ],
        {
            "P": "sophisticatedbackpacks:pickup_upgrade",
            "I": "create_new_age:fluxuated_magnetite",
            "L": 'tfc:gem/topaz',
        }
    ).id("kubejs:magnet_upgrade")
    event.shaped(
        'sophisticatedbackpacks:advanced_magnet_upgrade',
        [
            " I ",
            "IPI",
            "L L"
        ],
        {
            "P": "sophisticatedbackpacks:pickup_upgrade",
            "I": "create_new_age:netherite_magnet",
            "L": 'tfc:gem/topaz',
        }
    ).id("kubejs:advanced_magnet_upgrade")

    // 喂食升级
    event.shaped(
        'sophisticatedbackpacks:feeding_upgrade',
        [
            " A ",
            "BPC",
            " D "
        ],
        {
            "A": "tfc:food/barley_bread",
            "B": "tfc:food/oat_bread",
            "C": 'tfc:food/rye_bread',
            "D": 'tfc:food/wheat_bread',
            "P": 'sophisticatedbackpacks:upgrade_base',
        }
    ).id("kubejs:feeding_upgrade")


    // 压制升级
    event.replaceInput(
        { id: "sophisticatedbackpacks:compacting_upgrade" },
        '#forge:dusts/redstone',
        'tfc:gem/sapphire'
    )

    // 虚空升级 // sophisticatedbackpacks:void_upgrade
    event.shaped(
        'sophisticatedbackpacks:void_upgrade',
        [
            " E ",
            "OBO",
            "ROR"
        ],
        {
            "B": "sophisticatedbackpacks:upgrade_base",
            "E": "tfc:gem/ruby",
            "O": "#forge:obsidian",
            "R": "#forge:dusts/redstone"
        }
    ).id("kubejs:void_upgrade")

    // 嵌套升级
    event.shaped(
        'sophisticatedbackpacks:inception_upgrade',
        [
            "ESE",
            "DBD",
            "EDE"
        ],
        {
            "B": "sophisticatedbackpacks:upgrade_base",
            "D": "#forge:gems/diamond",
            "E": "tfc:gem/sapphire",
            "S": "tfc:gem/amethyst"
        }
    ).id("kubejs:inception_upgrade")

    // 补货升级
    event.shaped(
        "sophisticatedbackpacks:refill_upgrade",
        [
            " E ",
            "IBI",
            "RCR"
        ],
        {
            "B": "sophisticatedbackpacks:upgrade_base",
            "C": "#forge:chests/wooden",
            "E": "tfc:gem/sapphire",
            "I": "#forge:ingots/iron",
            "R": "#forge:dusts/redstone",
        }
    ).id("kubejs:refill_upgrade")
})

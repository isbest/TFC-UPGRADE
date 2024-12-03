// priority: 10
const DISABLE_VIALLIAN_RECIPES = [
    'minecraft:golden_apple', // 金苹果
    'minecraft:powered_rail', // 动力铁轨
    'minecraft:netherite_ingot', // 下届合金
    'minecraft:gold_block', // 铁块
    'minecraft:piston', // 原版活塞
    'minecraft:iron_bars', // 原版铁栅栏,tfc替代
    'minecraft:detector_rail', // 原版探测铁轨配方
    'minecraft:activator_rail', // 原版激活铁轨
    'create:potions', // 机械动力药水注液
    'minecraft:observer', // 原版侦测器
    'minecraft:comparator', // 原版比较器
    'minecraft:granite', // 原版花岗岩
    'minecraft:cauldron', // 原版炼药锅
    'minecraft:armor_stand', // 原版盔甲架
    'minecraft:crossbow', // 原版弩
    'minecraft:daylight_detector', // 原版阳光传感器
    'minecraft:sugar_from_sugar_cane', // 原版糖
    'minecraft:sugar_from_honey_bottle', // 原版糖
    'minecraft:smithing_table', // 原版锻造台
    'minecraft:minecart', // 原版矿车
    'minecraft:hopper',// 原版漏斗
    'minecraft:tripwire_hook', // 原版拌线钩
    'minecraft:item_frame', // 原版展示框
    'tfc:crafting/vanilla/armor_stand', // 原版盔甲架
    'minecraft:brown_dye',
    'minecraft:red_dye_from_poppy',
    'minecraft:red_dye_from_rose_bush',
    'minecraft:red_dye_from_tulip',
    'minecraft:red_dye_from_tulip',
    'minecraft:red_dye_from_beetroot',
    'minecraft:orange_dye_from_orange_tulip',
    'minecraft:yellow_dye_from_dandelion',
    'minecraft:yellow_dye_from_sunflower',
    'minecraft:light_blue_dye_from_blue_orchid',
    'minecraft:pink_dye_from_pink_tulip',
    'minecraft:pink_dye_from_peony',
    'minecraft:pink_dye_from_pink_petals',
    'minecraft:magenta_dye_from_allium',
    'minecraft:magenta_dye_from_lilac',
    'minecraft:light_gray_dye_from_oxeye_daisy',
    'minecraft:light_gray_dye_from_azure_bluet',
    'minecraft:light_gray_dye_from_white_tulip',
    'minecraft:white_dye_from_lily_of_the_valley',
    'minecraft:blue_dye_from_cornflower',
    'minecraft:paper', // 原版纸
    'create:pressing/sugar_cane', // 机械动力纸

    // 机械动力粉碎轮相关配方禁用
    'create:crushing/tuff',
    'create:crushing/tuff_recycling',
    'create:crushing/redstone_ore',
    'create:crushing/crimsite_recycling',
    'create:crushing/raw_lead',
    'create:crushing/ochrum_recycling',
    'create:crushing/raw_nickel',
    'create:crushing/veridium_recycling',
    'create:crushing/lead_ore',
    'create:crushing/nether_gold_ore',
    'create:crushing/uranium_ore',
    'create:crushing/aluminum_ore',
    'create:crushing/raw_iron',
    'create:crushing/nether_quartz_ore',
    'create:crushing/nickel_ore',
    'create:crushing/diorite_recycling',
    'create:crushing/raw_copper_block',
    'create:crushing/ochrum',
    'create:crushing/crimsite',
    'create:crushing/raw_gold',
    'create:crushing/veridium',
    'create:crushing/raw_aluminum_block',
    'create:crushing/tin_ore',
    'create:crushing/raw_uranium_block',
    'create:crushing/asurine',
    'create:crushing/wool',
    'create:crushing/copper_ore',
    'create:crushing/diorite',
    'create:crushing/raw_silver_block',
    'create:crushing/silver_ore',
    'createoreexcavation:crushing/redstone_crushing',
    'create:crushing/raw_lead_block',
    'create:crushing/raw_zinc_block',
    'create:crushing/raw_uranium',
    'create:crushing/iron_ore',
    'create:crushing/raw_aluminum',
    'create:crushing/raw_gold_block',
    'create:crushing/raw_copper',
    'create:crushing/gold_ore',
    'create:crushing/raw_silver',
    'create:crushing/raw_iron_block',
    'create:crushing/zinc_ore',
    'create:crushing/raw_zinc',
    'create:crushing/raw_nickel_block',
    'create:crushing/asurine_recycling',
    'create:milling/sugar_cane',
    'create:milling/cocoa_beans',
    'create:milling/wool',
    'create:milling/coal',
    'create:milling/calcite',
    'create:milling/dripstone_block',
    'create:milling/sunflower',
    'create:milling/cactus',
    'create:milling/white_tulip',
    'create:milling/lilac',
    'create:milling/dandelion',
    'create:milling/poppy',
    'create:milling/lapis_lazuli',
    'create:milling/wither_rose',
    'createoreexcavation:milling/redstone_milling',
    'create:milling/sea_pickle',
    'create:milling/oxeye_daisy',
    'create:milling/pink_tulip',
    'create:milling/peony',
    'create:milling/blue_orchid',
    'create:milling/cornflower',
    'create:milling/allium',
    'create:milling/red_tulip',
    'create:milling/lily_of_the_valley',
    'create:milling/azure_bluet',
    'create:milling/rose_bush',
    'create:milling/ink_sac',
    'create:milling/orange_tulip',
    // 机械动力混合搅拌
    'create:mixing/chocolate',
    'create:mixing/tea',
    'create:mixing/honey',
    'create:mixing/brass_ingot',
    'create:mixing/chocolate_melting',
    'create:mixing/lava_from_cobble',
    // 批量洗涤
    'create:splashing/immersiveengineering/crushed_raw_silver',
    'create:splashing/crushed_raw_iron',
    'create:splashing/stained_glass_pane',
    'create:splashing/soul_sand',
    'create:splashing/crushed_raw_copper',
    'create:splashing/crushed_raw_gold',
    'create:splashing/immersiveengineering/crushed_raw_nickel',
    'create:splashing/stained_glass',
    'create:splashing/crushed_raw_zinc',
    'create:splashing/immersiveengineering/crushed_raw_lead',
    // 'create:splashing/magma_block'
    // 'create:splashing/gravel',
    // 柴油动力
    'createdieselgenerators:crafting/engine_piston_from_rods',

    'createlowheated:mixing/honey',
    'createlowheated:mixing/chocolate',
    'createlowheated:mixing/builders_tea',
    'createlowheated:mixing/chocolate_melting',
    'minecraft:copper_ingot',
    'minecraft:copper_block',

    // 方解石
    'create:compacting/diorite_from_flint',

    // 追踪子弹
    'immersiveengineering:blueprint/bullet_homing',
    'immersiveengineering:blueprint/bullet_wolfpack',
    'immersiveengineering:blueprint/banner_wolf_l',
    'immersiveengineering:blueprint/banner_wolf',
    'immersiveengineering:blueprint/banner_wolf_r',
    // 沉浸金板
    'tfc_ie_addon:crafting/gold_sheet_to_plate',
    // 骨块
    'tfc:quern/bone_block',
    'minecraft:bone_meal_from_bone_block',
    'immersiveengineering:crusher/quartz',
    'create:crafting/appliances/slime_ball',
    'immersiveengineering:cloche/hemp',
    'immersiveengineering:cokeoven/coke',
    // 农夫乐事
    'farmersdelight:cutting/sweet_berry_cheesecake',
    'farmersdelight:cutting/oxeye_daisy',
    'farmersdelight:cutting/stone',
    'farmersdelight:cutting/blue_orchid',
    'farmersdelight:cutting/azure_bluet',
    'farmersdelight:cutting/cooked_cod',
    'farmersdelight:cutting/dandelion',
    'farmersdelight:cutting/lily_of_the_valley',
    'farmersdelight:cutting/lily_of_the_valley',
    'farmersdelight:cutting/allium',
    'farmersdelight:cutting/kelp_roll',
    'farmersdelight:cutting/pink_tulip',
    'farmersdelight:cutting/white_tulip',
    'farmersdelight:cutting/orange_tulip',
    'farmersdelight:cutting/salmon',
    'farmersdelight:cutting/cornflower',
    'farmersdelight:cutting/cod',
    'farmersdelight:cutting/poppy',
    'farmersdelight:cutting/wither_rose',
    'farmersdelight:cutting/red_tulip',
    'createlowheated:mixing/farmersdelight/mushroom_rice',
    'createlowheated:mixing/farmersdelight/sweet_berry_cookie',
    'createlowheated:mixing/farmersdelight/vegetable_soup',
    'createlowheated:mixing/farmersdelight/pumpkin_soup',
    'createlowheated:mixing/farmersdelight/beef_stew',
    'createlowheated:mixing/farmersdelight/glow_berry_custard',
    'createlowheated:mixing/farmersdelight/dumplings',
    'createlowheated:mixing/farmersdelight/bone_broth',
    'createlowheated:mixing/farmersdelight/baked_cod_stew',
    'createlowheated:mixing/farmersdelight/honey_cookie',
    'createlowheated:mixing/farmersdelight/stuffed_pumpkin_block',
    'createlowheated:mixing/farmersdelight/squid_ink_pasta',
    'createlowheated:mixing/farmersdelight/dog_food',
    'createlowheated:mixing/farmersdelight/fried_rice',
    'createlowheated:mixing/farmersdelight/cooked_rice',
    'createlowheated:mixing/farmersdelight/chicken_soup',
    'createlowheated:mixing/farmersdelight/ratatouille',
    'createlowheated:mixing/farmersdelight/noodle_soup',
    'createlowheated:mixing/farmersdelight/fish_stew',
    'createlowheated:mixing/farmersdelight/stuffed_potato',
    'createlowheated:mixing/farmersdelight/vegetable_noodles',
    'createlowheated:mixing/farmersdelight/cabbage_rolls',
    'farmersdelight:cooking/mushroom_rice',
    'farmersdelight:cooking/vegetable_noodles',
    'farmersdelight:roast_chicken_block',
    'farmersdelight:cooking/stuffed_pumpkin_block',
    'farmersdelight:rice_roll_medley_block',
    "farmersdelight:mushroom_rice",
    "farmersdelight:vegetable_noodles",
    "farmersdelight:roast_chicken_block",
    "farmersdelight:roast_chicken",
    "farmersdelight:stuffed_pumpkin_block",
    "farmersdelight:stuffed_pumpkin",
    "farmersdelight:rice_roll_medley_block",
    'farmersdelight:stuffed_potato',
    'farmersdelight:cooking/cabbage_rolls',
    // 炒菜 蘑菇
    'cuisinedelight:fried_mushroom',
    'create:milling/andesite',
    'farmersdelight:lead_from_straw'
]

const DISABLE_OUTPUT_ITEM = [
    'minecraft:gold_ingot', // 原版金锭
    '#create:upright_on_belt', // 药水
]

const DISABLE_RECIPE_TYPE = [
    'minecraft:blasting', // 高炉
    'minecraft:smelting', // 普通熔炉
    'minecraft:smoking', // 烟熏炉
    'minecraft:campfire_cooking', // 篝火烹饪
    // 'minecraft:smithing', // 锻造台,需要排除原版
    'minecraft:smithing_transform', // 锻造台升级模板
    // 'minecraft:composting', // 堆肥桶
    'minecraft:brewing', // 酿造台
    'crafting_special_shulkerboxcoloring', // 潜影盒
    'create:automatic_brewing', // 自动酿造, 通过create配置禁用
    'create:brewing', // 自动酿造
    'create:fan_haunting', // 缠魂
    'create:haunting', // 缠魂
]

ServerEvents.recipes(event => {
    DISABLE_VIALLIAN_RECIPES.forEach(item => {
        event.remove({ id: item })
    })

    DISABLE_OUTPUT_ITEM.forEach(item => {
        event.remove({ output: item })
    })

    DISABLE_RECIPE_TYPE.forEach(item => {
        event.remove({ type: item })
    })

    // 切石机配方兼容
    event.shaped('minecraft:stonecutter', [
        '   ',
        ' A ',
        'BBB',
    ], {
        'A': '#tfc:chisels',
        'B': '#tfc:rock/raw'
    }).id('minecraft:stonecutter')

    // 移除原版除了圆石之外的切割配方,圆石可以通过粒子刷石机获取,石头同理
    event.remove({
        type: 'minecraft:stonecutting',
        mod: 'minecraft',
        not: [{ input: 'minecraft:cobblestone' }, { input: 'minecraft:stone' }]
    })

    // 蓝图大炮兼容
    event.replaceInput(
        { id: 'create:crafting/schematics/schematicannon' },
        'minecraft:smooth_stone',
        '#tfc:rock/raw'
    )

    // 蓝图卓兼容
    event.replaceInput(
        { id: 'create:crafting/schematics/schematic_table' },
        'minecraft:smooth_stone',
        '#tfc:rock/raw'
    )
    // 砂轮兼容
    event.replaceInput(
        { id: 'minecraft:grindstone' },
        'minecraft:stone_slab',
        '#forge:smooth_stone_slab'
    )

    // 木桶
    event.shaped("minecraft:barrel", [
        'ABA',
        'A A',
        'ABA'
    ], {
        A: '#minecraft:planks',
        B: '#tfc:lumber'
    });

    // 矿物图册
    event.shaped('createoreexcavation:vein_atlas', [
        'AB ',
        'CD ',
        '   '
    ], {
        'A': '#forge:chests/wooden',
        'B': '#forge:gems/quartz',
        'C': 'minecraft:map',
        'D': 'tfc:gem/amethyst'
    }).id('createoreexcavation:vein_atlas')

    // 遮光玻璃
    event.replaceInput(
        { id: 'immersiveengineering:crafting/tinted_glass_lead_wire' },
        'minecraft:amethyst_shard',
        '#forge:gems/quartz'
    )

    // 哭泣黑曜石
    event.shaped(
        '8x minecraft:crying_obsidian',
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": "minecraft:obsidian",
            "B": "tfc:metal/ingot/blue_steel"
        }
    ).id("kubejs:crying_obsidian")
})
const SLUICING = [
    {
        "input": "bauxite",
        "output": "tfc_ie_addon:powder/bauxite",
        "sand": "tfcorewashing:pile_pink_sand",
        "pile": "tfcorewashing:dirty_pile_bauxite"
    },
    {
        "input": "bismuthinite",
        "output": "tfc:powder/bismuthinite",
        "sand": "tfcorewashing:pile_green_sand",
        "pile": "tfcorewashing:dirty_pile_bismuthinite"
    },
    {
        "input": "cassiterite",
        "output": "tfc:powder/cassiterite",
        "sand": "tfcorewashing:pile_brown_sand",
        "pile": "tfcorewashing:dirty_pile_cassiterite"
    },
    {
        "input": "chromite",
        "output": "tfcorewashing:chromium_powder",
        "sand": "tfcorewashing:pile_black_sand",
        "pile": "tfcorewashing:dirty_pile_chromite"
    },
    {
        "input": "cinnabar",
        "output": "minecraft:redstone",
        "sand": "tfcorewashing:pile_red_sand",
        "pile": "tfcorewashing:dirty_pile_cinnabar"
    },
    {
        "input": "copper",
        "output": "tfc:powder/native_copper",
        "sand": "tfcorewashing:pile_red_sand",
        "pile": "tfcorewashing:dirty_pile_copper"
    },
    {
        "input": "cryolite",
        "output": "minecraft:redstone",
        "sand": "tfcorewashing:pile_white_sand",
        "pile": "tfcorewashing:dirty_pile_cryolite"
    },
    {
        "input": "galena",
        "output": "tfc_ie_addon:powder/galena",
        "sand": "tfcorewashing:pile_black_sand",
        "pile": "tfcorewashing:dirty_pile_galena"
    },
    {
        "input": "garnierite",
        "output": "tfc:powder/garnierite",
        "sand": "tfcorewashing:pile_green_sand",
        "pile": "tfcorewashing:dirty_pile_garnierite"
    },
    {
        "input": "gold",
        "output": "tfc:powder/native_gold",
        "sand": "tfcorewashing:pile_yellow_sand",
        "pile": "tfcorewashing:dirty_pile_gold"
    },
    {
        "input": "graphite",
        "output": "tfc:powder/graphite",
        "sand": "tfcorewashing:pile_black_sand",
        "pile": "tfcorewashing:dirty_pile_graphite"
    },
    {
        "input": "hematite",
        "output": "tfc:powder/hematite",
        "sand": "tfcorewashing:pile_pink_sand",
        "pile": "tfcorewashing:dirty_pile_hematite"
    },
    {
        "input": "limonite",
        "output": "tfc:powder/limonite",
        "sand": "tfcorewashing:pile_yellow_sand",
        "pile": "tfcorewashing:dirty_pile_limonite"
    },
    {
        "input": "magnetite",
        "output": "tfc:powder/magnetite",
        "sand": "tfcorewashing:pile_black_sand",
        "pile": "tfcorewashing:dirty_pile_magnetite"
    },
    {
        "input": "malachite",
        "output": "tfc:powder/malachite",
        "sand": "tfcorewashing:pile_green_sand",
        "pile": "tfcorewashing:dirty_pile_malachite"
    },
    {
        "input": "silver",
        "output": "tfc:powder/native_silver",
        "sand": "tfcorewashing:pile_white_sand",
        "pile": "tfcorewashing:dirty_pile_silver"
    },
    {
        "input": "sphalerite",
        "output": "tfc:powder/sphalerite",
        "sand": "tfcorewashing:pile_black_sand",
        "pile": "tfcorewashing:dirty_pile_sphalerite"
    },
    {
        "input": "sulfur",
        "output": "tfc:powder/sulfur",
        "sand": "tfcorewashing:pile_yellow_sand",
        "pile": "tfcorewashing:dirty_pile_sulfur"
    },
    {
        "input": "tetrahedrite",
        "output": "tfc:powder/tetrahedrite",
        "sand": "tfcorewashing:pile_black_sand",
        "pile": "tfcorewashing:dirty_pile_tetrahedrite"
    },
    {
        "input": "uraninite",
        "output": "tfc_ie_addon:powder/uraninite",
        "sand": "tfcorewashing:pile_green_sand",
        "pile": "tfcorewashing:dirty_pile_uraninite"
    }
]

ServerEvents.genericLootTables(event => {
    SLUICING.forEach(item => {
        event.modify(`tfc:sluicing/deposits/dirty_dust_${item.input}`, table => {
            // 清空原战利品池
            table.clearPools()

            table.addPool(pool => {
                pool.addItem(item.output, 1, { min: 2, max: 2 })
            });

            table.addPool(pool => {
                pool.addItem(item.sand, 1, { min: 1, max: 1 })
            })

            table.addPool(pool => {
                pool.addItem(item.pile, 1, { min: 1, max: 1 }).randomChance(0.5)
            })
        });
    })
});

// 机械动力水洗配方
ServerEvents.recipes(event => {
    SLUICING.forEach(item => {
        event.recipes.create.splashing(
            [
                Item.of(item.output, 2),
                item.sand,
                item.pile
            ],
            `tfcorewashing:dirty_dust_${item.input}`
        ).id(`tfcorewashing:dirt_dusts/splashing/${item.input}_dirt_dust_splashing`)
    })
})
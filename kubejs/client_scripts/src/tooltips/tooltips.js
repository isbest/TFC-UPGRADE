ItemEvents.tooltip(event => {
    event.addAdvanced('firmaciv:nav_clock', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.firmaciv.nav_clock" })
                .blue()
        )
    })

    event.addAdvanced('firmaciv:sextant', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.firmaciv.sextant" })
                .blue()
        )
    })

    event.addAdvanced('firmaciv:barometer', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.firmaciv.barometer" })
                .blue()
        )
    })

    event.addAdvanced('farmersdelight:basket', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.farmersdelight.basket" })
                .blue()
        )
    })

    event.addAdvanced('createlowheated:basic_burner', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.createlowheated.basic_burner" })
                .blue()
        )
    })

    event.addAdvanced('minecraft:torch', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.minecraft.torch" })
                .blue()
        )
    })

    event.addAdvanced('minecraft:barrel', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.minecraft.barrel" })
                .blue()
        )
    })

    event.addAdvanced('tfc_knapsacks:backpack', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.tfc_knapsacks.backpack" })
                .blue()
        )
    })

    event.addAdvanced('tfcambiental:house_tester', (item, advanced, text) => {
        text.add(
            1,
            Text.of({ translate: "kubejs.tooltips.tfcambiental.house_tester" })
                .blue()
        )
    })

    // 采掘铲
    const excavator = [
        "tfc_hammer_time:metal/excavator/bismuth_bronze",
        "tfc_hammer_time:metal/excavator/wrought_iron",
        "tfc_hammer_time:metal/excavator/bronze",
        "tfc_hammer_time:metal/excavator/black_bronze",
        "tfc_hammer_time:metal/excavator/copper",
        "tfc_hammer_time:metal/excavator/steel",
        "tfc_hammer_time:metal/excavator/blue_steel",
        "tfc_hammer_time:metal/excavator/black_steel",
        "tfc_hammer_time:metal/excavator/red_steel"
    ]

    excavator.forEach(item => {
        event.addAdvanced(item, (i, advanced, text) => {
            text.add(
                1,
                Text.of({ translate: "kubejs.tooltips.tfc_hammer_time.excavator" })
                    .blue()
            )
        })
    })

    // 采掘锤
    const sledgehammer = [
        "tfc_hammer_time:metal/sledgehammer/wrought_iron",
        "tfc_hammer_time:metal/sledgehammer/bronze",
        "tfc_hammer_time:metal/sledgehammer/bismuth_bronze",
        "tfc_hammer_time:metal/sledgehammer/black_bronze",
        "tfc_hammer_time:metal/sledgehammer/copper",
        "tfc_hammer_time:metal/sledgehammer/steel",
        "tfc_hammer_time:metal/sledgehammer/black_steel",
        "tfc_hammer_time:metal/sledgehammer/red_steel",
        "tfc_hammer_time:metal/sledgehammer/blue_steel"
    ]
    sledgehammer.forEach(item => {
        event.addAdvanced(item, (i, advanced, text) => {
            text.add(
                1,
                Text.of({ translate: "kubejs.tooltips.tfc_hammer_time.sledgehammer" })
                    .blue()
            )
        })
    })
})
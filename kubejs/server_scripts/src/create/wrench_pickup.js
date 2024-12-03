ServerEvents.tags('block', event => {
    // 允许被扳手拆卸的方块
    event.add('create:wrench_pickup', [
        // 沉浸的蓄电池和接线柱，中继器
        "immersiveengineering:capacitor_lv",
        "immersiveengineering:capacitor_mv",
        "immersiveengineering:capacitor_hv",
        "immersiveengineering:furnace_heater",
        "immersiveengineering:connector_lv",
        "immersiveengineering:connector_lv_relay",
        "immersiveengineering:connector_mv",
        "immersiveengineering:connector_mv_relay",
        "immersiveengineering:connector_hv",
        "immersiveengineering:connector_hv_relay",
    ])
})
// priority: 10
ServerEvents.recipes(event => {
    // 传感机械眼
    event.replaceInput({}, 'minecraft:ender_eye', 'tfc:gem/sapphire')

    // 各种烟囱
    event.replaceInput({}, "minecraft:campfire", 'createlowheated:basic_burner')
})
const $PipeCollisionEvent = Java.loadClass("com.simibubi.create.api.event.PipeCollisionEvent")

// 粒子刷石机更改，刷天然安山岩和安山岩圆石
ForgeEvents.onEvent($PipeCollisionEvent.Spill, event => {
    let block = event.getState().block;
    if (block.id == "minecraft:stone") {
        event.setState(Block.getBlock('tfc:rock/raw/andesite').defaultBlockState())
    } else if (block.id == "minecraft:cobblestone") {
        event.setState(Block.getBlock('tfc:rock/cobble/andesite').defaultBlockState());
    }
})
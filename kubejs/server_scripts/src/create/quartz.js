// priority: 10
ServerEvents.recipes(event => {
  const { create } = event.recipes
  //注液生产石英，有点超模了，未来关
  if (true) {
    create.filling('kubejs:crystal_seed_certus2', [Fluid.of('minecraft:water', 100), 'kubejs:crystal_seed_certus1'])
    create.filling('kubejs:crystal_seed_certus3', [Fluid.of('minecraft:water', 100), 'kubejs:crystal_seed_certus2'])
    create.filling('tfc_ie_addon:mineral/quartz_shard', [Fluid.of('minecraft:water', 100), 'kubejs:crystal_seed_certus3'])
  }
  //加下种子产量，省一点沙子
  event.shapeless('4x kubejs:crystal_seed_certus1', ['#minecraft:sand', '#forge:gems/quartz'])

  //石英种子水中生长
  const { tfc } = event.recipes
  tfc.barrel_sealed(2000)
    .outputItem('kubejs:crystal_seed_certus2')
    .inputItem('kubejs:crystal_seed_certus1')
    .inputFluid(Fluid.of('minecraft:water', 150))
    .id('tfc:barrel/crystal_graw1')

  tfc.barrel_sealed(2000)
    .outputItem('kubejs:crystal_seed_certus3')
    .inputItem('kubejs:crystal_seed_certus2')
    .inputFluid(Fluid.of('minecraft:water', 150))
    .id('tfc:barrel/crystal_graw2')

  tfc.barrel_sealed(2000)
    .outputItem('4x tfc_ie_addon:mineral/quartz_shard')
    .inputItem('kubejs:crystal_seed_certus3')
    .inputFluid(Fluid.of('minecraft:water', 150))
    .id('tfc:barrel/crystal_graw3')
})
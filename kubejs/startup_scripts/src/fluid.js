StartupEvents.registry('fluid', event => {
    // 注册纸浆
    event.create('pulp')
    .thinTexture(0xF5DEB3)
    .bucketColor(0xF5DEB3)
    .displayName('纸浆')
    .noBlock()
    .noBucket()
})
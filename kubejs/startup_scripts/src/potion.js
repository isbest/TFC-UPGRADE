MoreJSEvents.registerPotionBrewing(event => {
     // 移除常规药水配方
     event.removeByPotion(null, null, null)
})
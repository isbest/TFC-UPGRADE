// priority: 10
ServerEvents.recipes(event => {
    // 平衡性调整,所有抽屉的配方都要使用 mcw_tfc_aio:furniture/cabinet/cabinet_drawer 参与合成
    event.replaceInput(
        { output: '#functionalstorage:drawer' },
        '#forge:chests',
        'mcw_tfc_aio:furniture/cabinet/cabinet_drawer'
    )
})
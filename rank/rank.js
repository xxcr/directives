import store from '~/store'

function removeElementFromParent (el) {
  // console.log('removeElementFromParent', el)
  el.parentNode && el.parentNode.removeChild(el)
}

function disableElement (el) {
  // console.log('disableElement', el)
  el.style.pointerEvents = 'none'
  el.style.filter = 'grayscale(100%) opacity(65%)'
}

const NoPermHanleMethods = {
  remove: removeElementFromParent,
  disable: disableElement,
  DEFAULT_NAME: 'remove'
}

export default {
  inserted (el, binding, vnode) {
    if (!binding.value) return
    const { value: bindingRank } = binding
    const userRanks = store.state.userInfo?.permission || []
    // 目前只有一个值，不需要数组
    let requiredRankList = []
    if (bindingRank && bindingRank instanceof Array) {
      requiredRankList = bindingRank.map(it => String(it))
    } else {
      requiredRankList.push(String(bindingRank))
    }
    const hasPermission = requiredRankList.some(rk => userRanks.includes(rk))
    if (!hasPermission) {
      let methodName = binding.arg // 处理方式
      if (!methodName || !Object.keys(NoPermHanleMethods).includes(methodName)) {
        methodName = NoPermHanleMethods.DEFAULT_NAME
      }
      NoPermHanleMethods[methodName](el)
    }
  },
}

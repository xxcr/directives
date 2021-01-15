import store from '~/store'

function removeElementFromParent (el) { // 移除该元素
  el.parentNode && el.parentNode.removeChild(el)
}

function disableElement (el) { // 将该元素的样式设置为disable
  el.style.pointerEvents = 'none'
  el.style.filter = 'grayscale(100%) opacity(65%)'
}

function textElement (el) {
  let newNode = document.createElement('div')
  newNode.innerText = el.innerText
  el.parentNode.replaceChild(newNode, el)
}

// 可扩充
const NoPermHanleMethods = { // 指令可能收到的参数对象，设置个默认值remove
  remove: removeElementFromParent,
  disable: disableElement,
  newNode.innerText = el.innerText
  DEFAULT_NAME: 'remove'
}

export default {
  inserted (el, binding, vnode) {
    if (!binding.value) return
    const { value: bindingRank } = binding
    const userRanks = store.state.userInfo?.permission || [] // 从vuex中获取用户有的权限
    let requiredRankList = [] // 指令的绑定值
    // 一个字符串转为数组
    if (bindingRank && bindingRank instanceof Array) {
      requiredRankList = bindingRank.map(it => String(it))
    } else {
      requiredRankList.push(String(bindingRank))
    }
    // 指令的绑定值，即该权限，是否在用户的权限中
    const hasPermission = requiredRankList.some(rk => userRanks.includes(rk))
    if (!hasPermission) {
      // 不在则对元素进行操作
      let methodName = binding.arg // 处理方式
      if (!methodName || !Object.keys(NoPermHanleMethods).includes(methodName)) {
        methodName = NoPermHanleMethods.DEFAULT_NAME
      }
      NoPermHanleMethods[methodName](el)
    }
  },
}

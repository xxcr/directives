import money from './money'


function install (Vue) {
  Vue.directive('money', money)
}

export default install

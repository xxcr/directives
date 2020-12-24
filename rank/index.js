import rank from './rank'

const install = function (Vue) {
  Vue.directive('rank', rank)
}

if (window.Vue) {
  window.rank = rank
  Vue.use(install) // eslint-disable-line
}

rank.install = install
export default rank

# v-rank

## 用法
 
```vue
<div v-rank="['6f7']"> 某权限操作 </div>
<div v-rank="`6f7`"> 某权限操作 </div>
```

权限值是"或"操作, 用户有其中任一权限即认为有权限

```vue
<div v-rank="['6f7', '777']"> 某权限操作 </div>
```

无权限的处理, 未指定时默认是隐藏元素remove,  
可以改为disable   

```vue
<div v-rank="['6f7']"> 某权限操作 </div>
<div v-rank:remove="['6f7']"> 某权限操作 </div>
<div v-rank:disable="['6f7']"> 某权限操作 </div>
```  

## jsx中使用自定义指令:  
<https://github.com/vuejs/babel-plugin-transform-vue-jsx#vue-directives>  

注意用大括号

```jsx
<a-button v-rank={['6f7']} onClick={() => ctx.codeMessageCheck(codeType, '授权')}>授权</a-button>
```

## life-cycle 挂载阶段
  第一次渲染
  componentWillMount
  componentDidMount

## 更新阶段

shouldComponentUpdate
true 更新
false 不更新

componentWillUnmout
清除
定时器
全局事件绑定

## Context  red blue
parent state
{
  them:'red'
}
层层传递
父组件 -> 子组件 -> 孙组件
1. 父组件 通过 getChildContext 返回提供的 context 内容
2. 父组件的.childContextTypes 定义提供的 context 类型
3. 子组件 获取 .contextTypes 定义接收的类型 this.context 获取


问题：
跨层级传递的时候，假如中间某一组件 shouldComponentupdate
return false 了之后 导致后代不会更新 context 的数据不能同步。

## reat 16.xxx
1. 构造 Provider Consumer
2. 父组件 <Provider value={}/> 提供数据
3. 后代组件 <Consumer>{()=>{}}</Consumer>获取数据

state={
  theme：'purple',
  toggle:this.handleToggletheme
}
静态属性 无法获取 实例的 this
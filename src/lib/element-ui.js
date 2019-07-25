// 常用组件统一引用
// 组件用法参考官网链接 https://element.eleme.cn/#/zh-CN/component/card
import Vue from 'vue'
import { Card, Button, Row, Col, Tag, Switch, Form, FormItem, Message, Input, Icon, Dropdown, DropdownMenu, DropdownItem, Popover, Tabs, TabPane } from 'element-ui'

Vue.component(Card.name, Card) // 卡片，将信息聚合在卡片容器中展示
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Tag.name, Tag)
Vue.component(Switch.name, Switch)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Popover.name, Popover)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.prototype.$message = Message

# Components

> 服务云-通用组件库

### Install

``` bash
npm install components-cs --save
```

### Use
``` bash
import Components from 'components-cs'
Vue.use(Components)
``` 

#### 一.DateRangePicker 时间区间选择器

###### Use
``` bash
<date-range-picker />
```

###### Props
``` bash
字段名称                类型           说明                        默认值
rangeSeparator         String        分割线                       “-”
defaultTime            Array         默认时间                     ['00:00:00', '23:59:59']
minDate                String/Date   最小值                       -
maxDate                String/Date   最大值        -
startPlaceholder       String        开始时间提示语                开始日期
endPlaceholder         String        结束时间提示语                结束日期
```

#### 二.DialogDrawerFree 无阻弹框

###### Use
``` bash
<dialog-drawer-free />
```

###### Props
``` bash
字段名称                类型           说明                             默认值
title                  String        标题                             -
width                  String        宽度                             -
visible                Boolean       是否显示Dialog                   false
append-to-body         Boolean       Dialog 自身是否插入至 body 元素上  false
```

###### Extend
###### 内置了 el-dialog__title、dialog-body__sub__title、el-button-group
``` bash
<dialog-drawer-free
title="这是无阻详情弹框"
width="600px"
:visible.sync="visible"
>
<template slot="title">
  <span class="el-dialog__title">这是无阻详情弹框-自定义title</span>
  <el-button-group>
    <el-button type="primary" size="mini">调拨</el-button>
    <el-button type="primary" size="mini">打印</el-button>
    <el-button type="primary" size="mini">修改</el-button>
    <el-dropdown>
      <el-button type="primary" size="mini" icon="el-icon-more" class="el-button__more" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>按钮1</el-dropdown-item>
        <el-dropdown-item>按钮2</el-dropdown-item>
        <el-dropdown-item>按钮3</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-button-group>
</template>
<div class="dialog-body__sub__title">这是title</div>
<template slot="footer">
  <el-button @click="visible = false">关闭</el-button>
  <el-button type="primary">保存</el-button>
</template>
</dialog-drawer-free>
```

#### 三.FormShow 表单详情
  
###### Use
``` bash
<form-show>
  <form-show-row>
    <form-show-col :span="12">
      <form-show-item label="用户名">贾晓朋</form-show-item>
    </form-show-col>
    <form-show-col :span="12">
      <form-show-item label="年龄">32</form-show-item>
    </form-show-col>
  </form-show-row>
  <form-show-row>
    <form-show-col :span="12">
      <form-show-item label="性别">男</form-show-item>
    </form-show-col>
    <form-show-col :span="12">
      <form-show-item label="电话">18519552719</form-show-item>
    </form-show-col>
  </form-show-row>
  <form-show-row>
    <form-show-col :span="24">
      <form-show-item label="上门地址">北京市海淀区创业路8号群英科技园2号楼北京市海淀区创业路8号群英科技园2号楼</form-show-item>
    </form-show-col>
  </form-show-row>
</form-show>
```

###### Props
``` bash
FormShow
字段名称                类型                说明                        默认值
labelWidth             String/Number      Label宽度                   -
labelSuffix            String             Label后缀                   ：
labelPosition          String             Label对齐方式（left/right）  right
backgroundColor        String             背景色                      #ffffff
borderColor            String             边框颜色                    #E4E7ED

FormShowCol
字段名称                类型                说明                        默认值
span                   Number             栅格占据的列数                24

FormShowItem
字段名称                类型                说明                        默认值
label                  String             字段名称                     -
```


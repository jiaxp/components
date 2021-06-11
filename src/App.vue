<template>
  <div id="app">
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

    <date-range-picker
      v-model="dateValue"
      @change="changeHandle"
    />
    <div>开始时间：{{ dateValue[0] }}</div>
    <div>结束时间：{{ dateValue[1] }}</div>

    <button @click="open">打开Dialog</button>
    <dialog-drawer-free-demo v-if="visible" ref="dialog" />
  </div>
</template>

<script>
import DialogDrawerFreeDemo from './dialog-drawer-free-demo'

export default {
  name: 'app',
  components: {
    DialogDrawerFreeDemo
  },
  data () {
    return {
      visible: false,
      dateValue: []
    }
  },
  methods: {
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.$refs.dialog.init()
      })
    },
    changeHandle (value) {
      console.log(value)
    }
  }
}
</script>


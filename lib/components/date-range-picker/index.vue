<template>
  <div class="date-range-picker">
    <el-date-picker
      v-model="value[0]"
      value-format="yyyy-MM-dd"
      :placeholder="startPlaceholder"
      clearable
      :picker-options="startPickerOptions"
      @change="changeHandle"
    />
    <span class="split">{{ rangeSeparator }}</span>
    <el-date-picker
      v-model="value[1]"
      value-format="yyyy-MM-dd"
      :placeholder="endPlaceholder"
      clearable
      :picker-options="endPickerOptions"
      @change="changeHandle"
    />
  </div>
</template>

<script>
import { DatePicker } from 'element-ui'

export default {
  name: 'DateRangePicker',
  components: {
    DatePicker
  },
  model: {
    prop: 'value',
    event: 'changeEvent'
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    rangeSeparator: {
      type: String,
      default () {
        return '-'
      }
    },
    defaultTime: {
      type: Array,
      default () {
        return ['00:00:00', '23:59:59']
      }
    },
    minDate: [String, Date],
    maxDate: [String, Date],
    startPlaceholder: {
      type: String,
      default () {
        return '开始日期'
      }
    },
    endPlaceholder: {
      type: String,
      default () {
        return '结束日期'
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    startPickerOptions () {
      const _this = this
      let minDate = null
      if (this.minDate && this.getObjectType(this.minDate) === 'Date') {
        minDate = this.minDate
      } else if (this.minDate && this.getObjectType(this.minDate) === 'String') {
        minDate = new Date(this.minDate.replace(/\-/g, '/'))
      }
      let maxDate = null
      if (this.maxDate && this.getObjectType(this.maxDate) === 'Date') {
        maxDate = this.maxDate
      } else if (this.maxDate && this.getObjectType(this.maxDate) === 'String') {
        maxDate = new Date(this.maxDate.replace(/\-/g, '/'))
      }
      return {
        disabledDate (time) {
          let r1 = _this.value[1] ? time.getTime() > (new Date(_this.value[1].replace(/\-/g, '/'))).getTime() : false
          let r2 = minDate ? time.getTime() < minDate.getTime() : false
          let r3 = maxDate ? time.getTime() > maxDate.getTime() : false
          return r1 || r2 || r3
        }
      }
    },
    endPickerOptions () {
      const _this = this
      let maxDate = null
      let minDate = null
      if (this.minDate && this.getObjectType(this.minDate) === 'Date') {
        minDate = this.minDate
      } else if (this.minDate && this.getObjectType(this.minDate) === 'String') {
        minDate = new Date(this.minDate.replace(/\-/g, '/'))
      }
      if (this.maxDate && this.getObjectType(this.maxDate) === 'Date') {
        maxDate = this.maxDate
      } else if (this.maxDate && this.getObjectType(this.maxDate) === 'String') {
        maxDate = new Date(this.maxDate.replace(/\-/g, '/'))
      }
      return {
        disabledDate (time) {
          let r1 = _this.value[0] ? time.getTime() < (new Date(_this.value[0].replace(/\-/g, '/'))).getTime() : false
          let r2 = minDate ? time.getTime() < minDate.getTime() : false
          let r3 = maxDate ? time.getTime() > maxDate.getTime() : false
          return r1 || r2 || r3
        }
      }
    }
  },
  methods: {
    getObjectType (s) {
      let str = Object.prototype.toString.call(s)
      let regex = /^\[object\s([a-zA-Z]+)\]$/
      return str.match(regex)[1]
    },
    changeHandle () {
      let newValue = []
      if (this.defaultTime[0]) {
        newValue[0] = this.value[0] && this.value[0].replace(` ${this.defaultTime[0]}`, '') + ` ${this.defaultTime[0]}`
      }
      if (this.defaultTime[1]) {
        newValue[1] = this.value[1] && this.value[1].replace(` ${this.defaultTime[1]}`, '') + ` ${this.defaultTime[1]}`
      }
      this.$emit('changeEvent', newValue)
      this.$emit('change', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  .date-range-picker {
    > .el-date-editor {
      width: 192px;
    }

    > .split {
      padding: 0px;
      font-size: 12px;
      color: #303133;
    }
  }
</style>

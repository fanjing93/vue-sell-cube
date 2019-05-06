const EVENT_SHOW = true
const EVENT_HIDE = false

export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = EVENT_SHOW
      // this.$emit(EVENT_SHOW)
    },
    hide () {
      this.visible = EVENT_HIDE
      // this.$emit(EVENT_HIDE)
    }
  }
}

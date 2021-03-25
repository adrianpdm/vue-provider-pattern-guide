<script>
import axios from '../lib/mockAxios'
export default {
  data: () => ({
    isLoading: false,
    error: null,
    data: null,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      await axios.get()
        .then((res) => {
          this.data = res.data;
          this.error = null
        }).catch((e) => {
          this.error = e.message;
          this.data = null;
        }).finally(() => {
          this.isLoading = false;
        })
    },
    renderSlot(slotName, bindings) {
      if (slotName in this.$scopedSlots === false) {
        return null;
      }
      const vnode = this.$scopedSlots[slotName](bindings);
      return vnode;
    }
  },
  render() {
    if (this.isLoading) {
      return this.renderSlot('loading');
    }
    if (this.error) {
      return this.renderSlot('error', {
        error: this.error,
      });
    }
    if (this.data) {
      return this.renderSlot('default', {
        data: this.data
      });
    }
    return null;
  }
}
</script>

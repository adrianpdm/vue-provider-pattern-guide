<script>
import axios from '../lib/mockAxios'
export default {
  data: () => ({
    response: null,
    error: null,
    isLoading: false,
  }),
  methods: {
    async execute(payload) {
      this.isLoading = true;
      await axios.post(payload)
        .then((res) => {
          this.response = res;
          this.error = null;
        }).catch((e) => {
          this.error = e.message;
          this.response = null;
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
    if (this.response) {
      return this.renderSlot('success', this.response);
    }
    return null;
  }
}
</script>

<script>
export default {
  data: () => ({
    error: null,
    data: null,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      try {
        if (!window.localStorage) {
          throw new Error('Local storage is not supported');
        }
        const itemValue = window.localStorage.getItem('userData');
        if (!itemValue) {
          throw new Error('Data not found');
        }
        const json = JSON.parse(itemValue);
        this.data = json;
        this.error = null;
      } catch (e) {
        this.data = null;
        this.error = e.message;
      }
    },
    getChildNode(slotName, bindings) {
      if (slotName in this.$scopedSlots === false) {
        return null;
      }
      const vnode = this.$scopedSlots[slotName](bindings);
      return vnode;
    }
  },
  render() {
    if (this.error) {
      return this.getChildNode('error', {
        error: this.error,
      });
    }
    if (this.data) {
      return this.getChildNode('default', {
        data: this.data
      });
    }
    return null;
  }
}
</script>
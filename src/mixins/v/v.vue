<template>
  <div></div>
</template>
<script>
  export default {
    name: 'V',
    props: {
      mapping: {
        type: String,
        required: true
      },
      parent: {
        type: String,
        required: false
      },
      territory: {
        type: String,
        required: false
      },
      level: {
        type: Number,
        required: false
      }
    },

    beforeCreate() {},
    
    created() {},
    
    beforeMount() {},
    
    mounted() {},
    
    beforeUpdate() {},
    
    updated() {},
    
    beforeDestroy() {},
    
    destroyed() {},

    methods: {
      run(action) {
        if (action instanceof Function) {
          // ...
        } else {
          // ...
        }
      }
    }
  };
</script>
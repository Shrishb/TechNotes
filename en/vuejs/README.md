---
sidebarDepth: 2
sidebar: auto
---

# Vuejs


## Best Practices

__Rerender a component__
```
<template>
  <component-to-re-render :key="componentKey" />
</template>

export default {
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;  
    }
  }
}

```

__Redirecting a route__
```
this.$router.push('/admin');

```
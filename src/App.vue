<template>
  <div>App</div>
  <p>{{store.state.userName}}</p>
  <p>{{$store.getters.newName}}</p>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.getters.newName)
    return {
      store
    }
  }
}
</script>

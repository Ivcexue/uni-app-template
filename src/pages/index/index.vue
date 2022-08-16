<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ name }}21312</text>
      <u-button type="primary" text="确定" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

import { getUserInfo } from '@/services/apis/user'

const store = useStore()

const name = computed(() => store.state.user.name)

store.commit('user/SET_USERINFO', { name: 'pg', age: 19 })

onMounted(async () => {
  const data = await getUserInfo()
  console.log(data, 'data...')
})
</script>

<style lang="scss" scoped>
.title {
  color: $base-color;
}
</style>

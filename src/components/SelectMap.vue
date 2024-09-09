<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

defineOptions({ name: 'SelectMap' })

const commonStore = useCommonStore()

function handleClick(id: number) {
  commonStore.changeMapIdAction(id)
}

onMounted(() => {
  commonStore.loadMapListAction()
})
</script>

<template>
  <div class="select-map">
    <div
      v-for="item in commonStore.mapList"
      class="select-map-item"
      :class="{
        cur: item.id === commonStore.mapId
      }"
      :key="item.id"
      @click="handleClick(item.id)"
    >
      {{ item.regionName }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select-map {
  display: grid;
  grid-gap: 16px 18px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
  padding-top: 40px;
  .select-map-item {
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #46464c;
    color: #d7d7d9;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    &.cur {
      background: #eac27e;
      color: #222;
    }
  }
}
</style>

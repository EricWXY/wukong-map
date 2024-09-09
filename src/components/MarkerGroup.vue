<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

defineOptions({ name: 'MarkerGroup' })

defineProps<{
  title: string
  items: Array<{
    id: number
    name: string
    landmarksCount: number
    iconUrl: string
    iconSelectedUrl: string
  }>
}>()

const commonStore = useCommonStore()

function handleClick(id: number) {
  if (commonStore.selectedMarkCatalogs.includes(id)) {
    commonStore.removeMarkCatalogAction(id)
  } else {
    commonStore.addMarkCatalogAction(id)
  }
}
</script>

<template>
  <div class="marker-group">
    <div class="marker-group-title">{{ title }}</div>
    <div class="marker-group-items">
      <div
        v-for="item in items"
        class="marker-group-item"
        :key="item.id"
        :class="{ cur: commonStore.selectedMarkCatalogs.includes(item.id) }"
        @click="handleClick(item.id)"
      >
        <img :src="item.iconUrl" />
        <span class="gs-ellipsis">
          {{ item.name }}
        </span>
        <span>{{ item.landmarksCount }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marker-group {
  margin-bottom: 20px;
  .marker-group-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    line-height: 1;
    color: #a7a7ad;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .marker-group-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 17px;
    .marker-group-item {
      display: flex;
      align-items: center;
      height: 20px;
      line-height: 1;
      font-size: 14px;
      color: #fff9;
      cursor: pointer;
      img {
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        opacity: 0.8;
        border-radius: 4px;
      }
      span {
        max-width: 90px;
      }
      span:last-of-type {
        margin-left: 5px;
      }
      .gs-ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &.cur {
        color: #eac27e;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useCommonStore } from '@/stores/common'

import MapInstance from '@/logics/MapInstance'

defineOptions({ name: 'MapView' })

const commonStore = useCommonStore()

const mapRef = useTemplateRef('map')
const mapInstance: MapInstance = new MapInstance()

function initMap() {
  if (mapRef.value == null) return
  mapInstance.init(mapRef.value)

  mapInstance.renderTile()
  mapInstance.renderZoomControl()
}

onMounted(() => {
  initMap()
})

watch(
  () => commonStore.markers,
  (val) => {
    if (mapInstance.map == null) {
      setTimeout(() => mapInstance.renderMarkers(val), 100)
      return
    }
    mapInstance.renderMarkers(val)
  },
  {
    immediate: true
  }
)

watch(
  () => commonStore.mapId,
  (val) => mapInstance.renderTile(val + '')
)
</script>

<template>
  <div class="map-wrapper" ref="map"></div>
</template>

<style lang="scss" scoped>
.map-wrapper {
  position: absolute;
  top: 0;
  left: 344px;
  width: calc(100% - 344px);
  height: 100%;
  z-index: 1;
}
</style>

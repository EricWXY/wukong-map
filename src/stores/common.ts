import { getMapInfo, getMapList, getMarkList } from '@/api'

export const useCommonStore = defineStore('common', () => {
  const mapId = ref(48)
  const mapInfo = ref<any>()
  const mapList = ref<Array<{ id: number; name: string; regionName: string }>>([])

  const selectedMarkCatalogs = ref<number[]>([])

  const markers = ref<any[]>([])

  function changeMapIdAction(id: number) {
    mapId.value = id
    selectedMarkCatalogs.value = []

    loadMapInfoAction()
    loadMarkerListsAction()
  }

  function addMarkCatalogAction(id: number) {
    selectedMarkCatalogs.value = [...selectedMarkCatalogs.value, id]
    loadMarkerListsAction()
  }

  function removeMarkCatalogAction(id: number) {
    selectedMarkCatalogs.value = selectedMarkCatalogs.value.filter((item) => item !== id)
    loadMarkerListsAction()
  }

  async function loadMarkerListsAction() {
    markers.value = (await getMarkList(selectedMarkCatalogs.value)) as any
  }

  async function loadMapInfoAction() {
    mapInfo.value = await getMapInfo(mapId.value)
  }
  async function loadMapListAction() {
    mapList.value = await getMapList()
  }

  return {
    mapId,
    mapInfo,
    mapList,
    markers,
    selectedMarkCatalogs,
    changeMapIdAction,
    loadMapInfoAction,
    loadMapListAction,
    addMarkCatalogAction,
    removeMarkCatalogAction
  }
})

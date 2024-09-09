import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

request.interceptors.response.use((res) => res.data)

export function getPopupTmpl() {
  return request.get<unknown, string>('/templates/popup.ejs')
}

export function getMarkerTmpl() {
  return request.get<unknown, string>('/templates/marker.ejs')
}

export function getMapList() {
  return request.get<unknown, { id: number; name: string; regionName: string }[]>(
    '/api/map/getMapList'
  )
}

export function getMapInfo(id: number = 48) {
  return request.get('/api/map/getMapInfo', { params: { id } })
}

export function getMarkList(ids: number[] = [3266]) {
  return request.get('/api/mark/getMarkList', { params: { ids: ids.join(',') } })
}

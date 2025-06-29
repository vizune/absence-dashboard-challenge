export const API_BASE_URL = 'https://front-end-kata.brighthr.workers.dev/api'

export const API_ENDPOINTS = {
  ABSENCES: `${API_BASE_URL}/absences`,
  CONFLICT: (id: number) => `${API_BASE_URL}/conflict/${id}`,
}

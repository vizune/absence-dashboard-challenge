import { useEffect, useState } from 'react'
import { API_ENDPOINTS } from '../constants'
import type { Absence } from '../types'

type ConflictMap = Record<number, boolean>

export function useAbsences() {
  const [absences, setAbsences] = useState<Absence[]>([])
  const [conflicts, setConflicts] = useState<ConflictMap>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAbsences() {
      try {
        setLoading(true)
        const res = await fetch(API_ENDPOINTS.ABSENCES)
        const data: Absence[] = await res.json()
        setAbsences(data)

        const conflictResults: ConflictMap = {}
        await Promise.all(
          data.map(async (absence) => {
            try {
              const conflictRes = await fetch(
                API_ENDPOINTS.CONFLICT(absence.id)
              )
              const conflictData = await conflictRes.json()
              conflictResults[absence.id] = conflictData.hasConflict ?? false
            } catch (err) {
              console.error('Failed to fetch conflict for ID', absence.id)
            }
          })
        )

        setConflicts(conflictResults)
      } catch (err) {
        setError('Failed to load absences')
      } finally {
        setLoading(false)
      }
    }

    fetchAbsences()
  }, [])

  return {
    absences,
    conflicts,
    loading,
    error,
  }
}

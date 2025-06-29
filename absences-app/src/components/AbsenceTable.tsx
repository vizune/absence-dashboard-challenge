import { useAbsences } from '../hooks/useAbsences'
import { AbsenceRow } from './AbsenceRow'

export const AbsenceTable = () => {
  const { absences, conflicts, loading, error } = useAbsences()

  if (loading) return <div>Loading absences...</div>
  if (error) return <div>{error}</div>

  const handleNameClick = (employee: string) => {
    console.log('Show modal for:', employee)
  }

  return (
    <table className="min-w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th>Employee</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Type</th>
          <th>Status</th>
          <th>Conflict</th>
        </tr>
      </thead>
      <tbody>
        {absences.map((absence) => (
          <AbsenceRow
            key={absence.id}
            id={absence.id}
            employee={absence.employee}
            startDate={absence.startDate}
            endDate={absence.endDate}
            type={absence.type}
            approved={absence.approved}
            hasConflict={conflicts[absence.id] || false}
            onNameClick={handleNameClick}
          />
        ))}
      </tbody>
    </table>
  )
}

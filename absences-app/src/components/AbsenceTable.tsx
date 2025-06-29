import { useState } from 'react'
import { useAbsences } from '../hooks/useAbsences'
import type { Employee } from '../types'

import { AbsenceRow } from './AbsenceRow'
import { EmployeeModal } from './EmployeeModal'

export const AbsenceTable = () => {
  const { absences, conflicts, loading, error } = useAbsences()
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)

  if (loading) return <div>Loading absences...</div>
  if (error) return <div>{error}</div>

  const handleNameClick = (employee: Employee) => {
  setSelectedEmployee(employee)
}

  const closeModal = () => {
    setSelectedEmployee(null)
  }

  return (
    <>
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

      {selectedEmployee && (
        <EmployeeModal isOpen={true} onClose={closeModal}>
          <p>Details for <strong>{selectedEmployee?.firstName}</strong></p>
        </EmployeeModal>
      )}
    </>
  )
}

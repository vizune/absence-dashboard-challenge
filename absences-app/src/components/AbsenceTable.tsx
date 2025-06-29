import { useState } from 'react'
import { useAbsences } from '../hooks/useAbsences'
import type { Employee } from '../types'
import { formatDate } from '../utils/formatDate'

import { AbsenceRow } from './AbsenceRow'
import { EmployeeModal } from './EmployeeModal'

export const AbsenceTable = () => {
  const { absences, conflicts, loading, error } = useAbsences()
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  )

  if (loading) return <div>Loading absences...</div>
  if (error) return <div>{error}</div>

  const handleNameClick = (employee: Employee) => {
    setSelectedEmployee(employee)
  }

  const closeModal = () => {
    setSelectedEmployee(null)
  }

  const headers = [
    'Employee',
    'Start Date',
    'End Date',
    'Type',
    'Status',
    'Conflict',
  ]

  const employeeAbsences = selectedEmployee
    ? absences.filter((a) => a.employee.id === selectedEmployee.id)
    : []

  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow dark:shadow-lg">
        <table className="min-w-full text-left border-collapse bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-200">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-3 font-medium">
                  {header}
                </th>
              ))}
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
                type={absence.absenceType}
                approved={absence.approved}
                hasConflict={conflicts[absence.id] || false}
                onNameClick={handleNameClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      {selectedEmployee && (
        <EmployeeModal isOpen={true} onClose={closeModal}>
          <div className="p-4 text-gray-800 dark:text-gray-100">
            <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
              Absences for {selectedEmployee.firstName}{' '}
              {selectedEmployee.lastName}
            </h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              {employeeAbsences.map((absence) => (
                <li
                  key={absence.id}
                  className="border-b border-gray-200 dark:border-gray-700 pb-3"
                >
                  <div>
                    <span className="font-semibold">Type:</span> {absence.absenceType}
                  </div>
                  <div>
                    <span className="font-semibold">Start:</span>{' '}
                    {formatDate(absence.startDate)}
                  </div>
                  <div>
                    <span className="font-semibold">End:</span>{' '}
                    {formatDate(absence.endDate)}
                  </div>
                  <div>
                    <span className="font-semibold">Status:</span>{' '}
                    {absence.approved ? 'Approved' : 'Pending'}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </EmployeeModal>
      )}
    </>
  )
}

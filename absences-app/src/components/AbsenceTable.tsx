import { useState } from 'react'
import { useAbsences } from '../hooks/useAbsences'
import type { Employee } from '../types'

import { AbsenceRow } from './AbsenceRow'
import { EmployeeModal } from './EmployeeModal'
import { EmployeeAbsenceDetails } from './EmployeeAbsenceDetails'

export const AbsenceTable = () => {
  const { absences, conflicts, loading, error } = useAbsences()
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  )
  const [sortField, setSortField] = useState<
    'name' | 'startDate' | 'endDate' | 'absenceType'
  >('startDate')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  if (loading) return <div>Loading absences...</div>
  if (error) return <div>{error}</div>

  const handleNameClick = (employee: Employee) => {
    setSelectedEmployee(employee)
  }

  const closeModal = () => {
    setSelectedEmployee(null)
  }

  const headers = [
    { label: 'Employee', field: 'name' },
    { label: 'Start Date', field: 'startDate' },
    { label: 'End Date', field: 'endDate' },
    { label: 'Type', field: 'absenceType' },
    { label: 'Status' },
    { label: 'Conflict' },
  ]

  const sortedAbsences = [...absences].sort((a, b) => {
    let aValue, bValue

    if (sortField === 'name') {
      aValue = `${a.employee.firstName} ${a.employee.lastName}`.toLowerCase()
      bValue = `${b.employee.firstName} ${b.employee.lastName}`.toLowerCase()
    } else if (sortField === 'absenceType') {
      aValue = a.absenceType
      bValue = b.absenceType
    } else {
      aValue = new Date(a[sortField]).getTime()
      bValue = new Date(b[sortField]).getTime()
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const handleSort = (field: typeof sortField) => {
    if (field === sortField) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow dark:shadow-lg">
        <table className="min-w-full text-left border-collapse bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-200">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
              {headers.map((header) => (
                <th
                  key={header.label}
                  className={`cursor-pointer px-4 py-2 ${header.field ? 'hover:underline' : ''}`}
                  onClick={
                    header.field
                      ? () => handleSort(header.field as any)
                      : undefined
                  }
                >
                  {header.label}
                  {sortField === header.field && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedAbsences.map((absence) => (
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
          <EmployeeAbsenceDetails
            employee={selectedEmployee}
            absences={absences}
          />
        </EmployeeModal>
      )}
    </>
  )
}

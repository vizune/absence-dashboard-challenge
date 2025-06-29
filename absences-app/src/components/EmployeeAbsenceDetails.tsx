import React from 'react'
import type { Employee, Absence } from '../types'
import { formatDate } from '../utils/formatDate'

type Props = {
  employee: Employee
  absences: Absence[]
}

export const EmployeeAbsenceDetails = ({ employee, absences }: Props) => {
  const employeeAbsences = absences.filter((a) => a.employee.id === employee.id)

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">
        Absences for {employee.firstName} {employee.lastName}
      </h2>
      {employeeAbsences.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No absences found.</p>
      ) : (
        <ul className="space-y-2">
          {employeeAbsences.map((a) => (
            <li
              key={a.id}
              className="border-b border-gray-300 dark:border-gray-700 pb-2"
            >
              <p>
                <strong>Type:</strong> {a.absenceType}
              </p>
              <p>
                <strong>From:</strong> {formatDate(a.startDate)} –{' '}
                <strong>To:</strong> {formatDate(a.endDate)}
              </p>
              <p>
                <strong>Status:</strong> {a.approved ? 'Approved' : 'Pending'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

import React from 'react'
import type { Employee } from '../types'
import { formatDate } from '../utils/formatDate'

import { ConflictPill } from './ConflictPill'

type AbsenceRowProps = {
  id: number
  employee: Employee
  startDate: string
  endDate: string
  type: string
  approved: boolean
  hasConflict: boolean
  onNameClick?: (employee: Employee) => void
}

export const AbsenceRow: React.FC<AbsenceRowProps> = ({
  employee,
  startDate,
  endDate,
  type,
  approved,
  hasConflict,
  onNameClick,
}) => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-900">
      <td
        className="p-4 text-blue-600 dark:text-blue-400 cursor-pointer underline hover:text-blue-800 dark:hover:text-blue-300"
        onClick={() => onNameClick?.(employee)}
      >
        {employee.firstName} {employee.lastName}
      </td>
      <td className="p-4 text-gray-700 dark:text-gray-200 text-center">
        {formatDate(startDate)}
      </td>
      <td className="p-4 text-gray-700 dark:text-gray-200 text-center">
        {formatDate(endDate)}
      </td>
      <td className="p-4 capitalize text-gray-700 dark:text-gray-200 text-center">
        {type}
      </td>
      <td
        className={`p-4 font-medium text-center ${
          approved
            ? 'text-green-600 dark:text-green-400'
            : 'text-yellow-600 dark:text-yellow-400'
        }`}
      >
        {approved ? 'Approved' : 'Pending'}
      </td>
      <td className="text-center align-middle">
        <ConflictPill hasConflict={hasConflict} />
      </td>
    </tr>
  )
}

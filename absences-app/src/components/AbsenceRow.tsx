import React from 'react'
import type { Employee } from '../types'

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
    <tr className="border-b hover:bg-gray-50">
      <td
        className="text-blue-600 cursor-pointer underline"
        onClick={() => onNameClick?.(employee)}
      >
        {employee.firstName} {employee.lastName}
      </td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{type}</td>
      <td>{approved ? 'Approved' : 'Pending'}</td>
      <td>{hasConflict && <span title="Has conflict">⚠️</span>}</td>
    </tr>
  )
}

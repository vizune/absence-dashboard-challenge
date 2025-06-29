import React from 'react'

type ConflictPillProps = {
  hasConflict: boolean
}

export const ConflictPill: React.FC<ConflictPillProps> = ({ hasConflict }) => {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full
        ${
          hasConflict
            ? 'text-red-800 bg-red-100 dark:text-red-200 dark:bg-red-900'
            : 'text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900'
        }`}
      title={
        hasConflict ? 'This absence has a scheduling conflict' : 'No conflict'
      }
    >
      {hasConflict ? 'Conflict' : 'Clear'}
    </span>
  )
}

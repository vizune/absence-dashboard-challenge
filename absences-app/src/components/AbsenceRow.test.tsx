import { render, screen } from '@testing-library/react'
import { AbsenceRow } from './AbsenceRow'

const mockAbsence = {
  id: 1,
  employee: {
    id: 101,
    firstName: 'Brock',
    lastName: 'Harrison',
  },
  startDate: '2023-09-01',
  endDate: '2023-09-05',
  type: 'Vacation',
  approved: true,
  hasConflict: false,
}

describe('AbsenceTable', () => {
  test('renders absence row with correct data', () => {
    render(<AbsenceRow {...mockAbsence} />)

    expect(screen.getByText('Brock Harrison')).toBeInTheDocument()
    expect(screen.getByText('2023-09-01')).toBeInTheDocument()
    expect(screen.getByText('2023-09-05')).toBeInTheDocument()
    expect(screen.getByText('Vacation')).toBeInTheDocument()
    expect(screen.getByText('Approved')).toBeInTheDocument()
  })
})

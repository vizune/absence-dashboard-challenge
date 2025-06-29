import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { AbsenceTable } from './AbsenceTable'

vi.mock('../hooks/useAbsences', () => ({
  useAbsences: () => ({
    absences: [
      {
        id: 1,
        employee: { firstName: 'Ash', lastName: 'Ketchum', id: 101 },
        startDate: '2022-05-28T04:39:06.470Z',
        endDate: '2022-06-01T04:39:06.470Z',
        type: 'vacation',
        approved: true,
      },
      {
        id: 2,
        employee: { firstName: 'Misty', lastName: 'Williams', id: 102 },
        startDate: '2023-01-15T00:00:00.000Z',
        endDate: '2023-01-20T00:00:00.000Z',
        type: 'sickness',
        approved: false,
      },
    ],
    conflicts: { 1: false, 2: true },
    loading: false,
    error: null,
  }),
}))


describe('AbsenceTable', () => {
  beforeEach(() => {
    render(<AbsenceTable />)
  })

  it('renders Ash Ketchum', () => {
    expect(screen.getByText(/ash/i)).toBeInTheDocument()
    expect(screen.getByText(/ketchum/i)).toBeInTheDocument()
  })

  it('renders Misty Williams', () => {
    expect(screen.getByText(/misty/i)).toBeInTheDocument()
    expect(screen.getByText(/williams/i)).toBeInTheDocument()
  })
})
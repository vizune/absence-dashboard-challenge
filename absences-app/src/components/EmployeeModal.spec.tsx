import { render, screen, fireEvent } from '@testing-library/react'
import { EmployeeModal } from './EmployeeModal'

describe('EmployeeModal', () => {
  const onCloseMock = vi.fn()

  beforeEach(() => {
    render(
      <EmployeeModal isOpen={true} onClose={onCloseMock}>
        <p>Hello from the modal</p>
      </EmployeeModal>
    )
  })

  it('renders the modal content', () => {
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/hello from the modal/i)).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', () => {
    fireEvent.click(screen.getByText(/close/i))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})

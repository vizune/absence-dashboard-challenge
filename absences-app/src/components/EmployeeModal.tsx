type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const EmployeeModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div role="dialog" aria-modal="true" className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

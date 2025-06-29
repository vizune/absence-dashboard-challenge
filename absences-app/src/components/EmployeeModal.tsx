import { useEffect, useRef } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const EmployeeModal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-2xl border border-gray-300 dark:border-gray-600 shadow-2xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

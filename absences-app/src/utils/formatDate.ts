export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return isNaN(date.getTime())
    ? 'N/A'
    : date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
}

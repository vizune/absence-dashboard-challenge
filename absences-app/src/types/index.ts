export type Employee = {
  id: number
  firstName: string
  lastName: string
}

export type Absence = {
  id: number
  startDate: string
  endDate: string
  employee: Employee
  absenceType: string
  approved: boolean
}

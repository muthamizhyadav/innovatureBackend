export class CreateExpenseTrackerDto {
    budgetName: string
    budgetAmount: string
    toDate: Date | null
    note: string
}


export class CreateGoalDto {
    goalName: string
    targetAmount: number
    savingAmount: number
    savingDate: Date | null
    targetDate: Date | null
    description: string
}

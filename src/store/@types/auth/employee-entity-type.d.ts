interface IEmployeeListState {
    isLoading: boolean
    list: {
        data: IEmployeeItem[],
        message?: string,
        status?: boolean
    }
    newEmployeeData : {
        isLoading: boolean
        hasApiError: boolean
    },
    updateEmployeeData : {
        isLoading: boolean
        hasApiError: boolean
    },
    deleteEmployeeData : {
        isLoading: boolean
        hasApiError: boolean
    },

}

interface IEmployeeItem {
    _id?: string
    firstName?: string
    lastName?: string
}
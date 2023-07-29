interface ITaskListState {
    isLoading: boolean
    list: {
        data?: ITaskItem[],
        message?: string,
        status?: boolean
    }
    newTask : {
        isLoading: boolean,
        hasApiError: boolean
    }
}

interface ITaskItem {
    _id: string
    task: string
}
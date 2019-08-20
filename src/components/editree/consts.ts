type operationType = 'edit'|'delete'

export type itemType = {
    key: string
    title: string
    operation: Array<operationType>
    children?: Array<itemType>
}

export type dataType = Array<itemType>
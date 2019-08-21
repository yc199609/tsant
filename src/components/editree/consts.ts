type operationType = 'edit'|'delete'

export type itemType = {
    key: string
    title: string
    operation: Array<operationType>
    children?: Array<itemType>
}

export type dataType = Array<itemType>

export type editingType = (key:string) => boolean

export type handleEditType = (key:string) => void

type resetTitleProps = {
    title:string
    key: string
    data:dataType
}
export type resetTitleType = (arg0: resetTitleProps) => dataType

type resetDataProps = {
    key:string
    data:dataType
}
export type resetDataType = (arg0:resetDataProps) => dataType
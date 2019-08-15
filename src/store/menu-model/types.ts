export type StoreState = {
    menus: Array<menu>
}

export type menu = {
    index: number,
    name: string,
    path: string,
    code: string
}
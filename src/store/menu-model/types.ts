export type StoreState = {
    menus: Array<menu>
}

export type menu = {
    name: string,
    path: string,
    code: string
}
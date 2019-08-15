import React,{ lazy } from 'react'
const Employee = lazy(()=> import('pages/employee'))
const DeviceData = lazy(()=> import('pages/deviceData'))
const Database = lazy(()=> import('pages/database'))
const Task = lazy(()=> import('pages/task'))

interface RouterType {
    [key:string]:React.LazyExoticComponent<React.FunctionComponent<{}>>
}

export const AsyncRouter:RouterType = {
    Employee,
    DeviceData,
    Database,
    Task
}

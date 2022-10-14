export interface Todo {
    id: number;
    todo: string;
    isDone: boolean
}
export interface Action{
    type: string;
    payload: number | string[] | number[]
}
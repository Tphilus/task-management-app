export type NavLink = {
    icon: JSX.Element;
    href: string;
    label: string;
}



export type TodoTask = {
    id: number;
    title: string;
    content: string;
    creatAt: number;
    completed: boolean
}

export interface IStates {
    tasks: TodoTask[]
}


export type ActionType =
  | { type: 'ADD_TODO'; payload: { text: string;  content: string } }
  | { type: 'EDIT_TODO'; payload: { id: number; text: string, content: string } }
  | { type: 'DELETE_TODO'; payload: { id: number } }
  | { type: 'TOGGLE_TODO'; payload: { id: number } };

export type Action = {
    type: 'addTask' | 'editTask' | 'deleteTask' | 'isComplete'
}
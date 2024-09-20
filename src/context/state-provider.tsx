import { createContext, useContext } from "react";
import { useLocalStorage } from "react-use";

export const StateContext = createContext({}) as any;

export const StateProvider = ({ children }: any) => {
  const [state, setState] = useLocalStorage<
    { id: any; title: any; content: any; isImportant: boolean, date: any }[]
  >("task", []);

  // Add Task
  const addTask = ({ title, content }: any) => {
    const newState = [
      ...(state || []),
      {
        id: Date.now(),
        title,
        content,
        isImportant: false,
        date: Date.now(),
      },
    ];
    setState(newState);
    console.log(newState);
    
  };

  // Delete Task 
  const deleteTask = (id: number) => {
    const filteredTasks = state?.filter((task) => task.id !== id);
    setState(filteredTasks);
  };

  // Edit Task 
  const editTask = (id: number, updatedTitle: string, updatedContent: string, updatedDate: string) => {
    const updatedTasks = state?.map((task) =>
      task.id === id
        ? { ...task, title: updatedTitle, content: updatedContent, date: updatedDate }
        : task
    );
    setState(updatedTasks);
  };

  // Toggle Important 
  const isImportant = (id: number) => {
    const updatedTasks = state?.map((task) =>
      task.id === id ? { ...task, isImportant: !task.isImportant } : task
    );
    setState(updatedTasks);
  };

  return (
    <StateContext.Provider
      value={{
        task: state || [], 
        addTask,
        deleteTask,
        editTask,
        isImportant,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

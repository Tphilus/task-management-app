import TaskCard from "../../components/card/taskcard/page";
import AddTaskModal from "@/components/modal/addTask";
import { useStateValue } from "@/context/state-provider";
import { isToday } from "date-fns";

export const MyDay = () => {
  const taskContext: any = useStateValue();

  // Filter tasks for today
  const todayTasks = taskContext.task.filter((taskItem: { id: number; title: string; content: string; isImportant: boolean; date: Date }) => 
    isToday(taskItem.date)
  );

  return (
    <div className="px-4 py-4">
      <div className="flex flex-col gap-4">
        {todayTasks.map((taskItem: { id: number; title: string; content: string; isImportant: boolean; date: Date }) => (
          <TaskCard key={taskItem.id} task={taskItem} />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-40">
        <AddTaskModal />
      </div>
    </div>
  );
}

import ImportantTaskCard from "@/components/card/importanttaskcard/page";
import TaskCard from "@/components/card/taskcard/page";
import { useStateValue } from "@/context/state-provider"

export const Important = () => {
  const { task }: any = useStateValue()

  const importantTasks = task.filter((task: any) => task.isImportant);

  return (
    <div className=" px-4 py-8" >
      <div className="space-y-4">
        {
          !importantTasks.length ? <p className=" font-bold" >No important tasks found</p> : importantTasks.map((task: any) => (
            <ImportantTaskCard key={task.id} task={task} />
          ))
        }
      </div>
    </div>
  )
}

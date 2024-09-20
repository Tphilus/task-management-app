import AllTaskCard from "@/components/card/alltaskcard/page";
import { useStateValue } from "@/context/state-provider"

export const Task = () => {
  const { task }: any = useStateValue()

  const AllTasks = task.filter((task: any) => task);

  return (
    <div className=" px-4 py-8" >
      <div className="space-y-4">
        {
          !AllTasks.length ? <p className=" font-bold" >No important tasks found</p> : AllTasks.map((task: any) => (
            <AllTaskCard key={task.id} task={task} />
          ))
        }
      </div>
    </div>
  )
}

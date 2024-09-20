import { MdDelete, MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { EditTaskModal } from "@/components/modal/editTask";
import { ViewTaskModal } from "@/components/modal/viewTask";
import { useStateValue } from "@/context/state-provider";
import { FaStar } from "react-icons/fa";

interface TaskCardProps {
  task: {
    id: number;
    title: string;
    content: string;
    isImportant: boolean,
    date: any
  };
}

const ImportantTaskCard = ({ task }: TaskCardProps) => {
  const { deleteTask, isImportant }: any = useStateValue()

  const deleTaskHandle = () => {
    deleteTask(task.id)
  }

  const toggleImportant = () => {
    isImportant(task.id)
  }
  // <FaRegSquareCheck />

  return (
    <div className="flex justify-between items-center border drop-shadow-xl px-8 py-4">
      <div className="flex items-center gap-2">
        <button onClick={toggleImportant} >
          {task.isImportant ? <FaStar size={24} color="#66BB6A"  /> : <CiStar size={24} color="#66BB6A" /> }
        </button>
        <MdCheckBoxOutlineBlank size={24} color="#66BB6A" />
        <div className="">{task.title}</div> 
      </div>
      <div className="flex gap-2">
        {/* View Task Modal */}
        <ViewTaskModal task={task} />
        
        {/* Edit Task Modal */}
        <EditTaskModal task={task} />

        {/* Delete Task  */}
        <button className='rounded-full p-3 bg-delete-color' onClick={deleTaskHandle}>
          <MdDelete size={24} color="#ffffff" />
        </button>
      </div>
    </div>
  );
};

export default ImportantTaskCard;

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BsEye } from "react-icons/bs";
import moment from 'moment';

interface ViewTaskModalProps {
  task: {
    title: string;
    content: string;
    date: any;
  };
}

export const ViewTaskModal = ({ task }: ViewTaskModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className='rounded-full p-3 bg-dark-green'>
          <BsEye size={24} color="#ffffff" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Task</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <DialogDescription className=' flex items-center gap-2' >
            <span className=' font-bold text-lg' >Title:</span> <span className=' text-xl' >{task.title}</span>
          </DialogDescription>
          <DialogDescription className=' flex items-center gap-2' >
            <span className=' font-bold text-lg' >Note:</span> <span>{task.content}</span>
          </DialogDescription>
          <DialogDescription className=' flex items-center gap-2' >
            <span className=' font-bold text-lg' >Date:</span> <span>
            {moment(task.date).format("MMMM Do, YYYY")}
               </span>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};


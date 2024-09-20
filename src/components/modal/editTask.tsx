import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useStateValue } from '@/context/state-provider';
import { CiEdit } from 'react-icons/ci';
import moment from 'moment'; // Import moment for date formatting
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EditTaskModalProps {
  task: {
    id: number;
    title: string;
    content: string;
    date: any; // Ensure the date is stored as a valid date format (Date object or timestamp)
  };
}

export const EditTaskModal = ({ task }: EditTaskModalProps) => {
  const [title, setTitle] = useState(task.title);
  const [content, setContent] = useState(task.content);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    task.date ? new Date(task.date) : undefined
  ); 
  const { editTask }: any = useStateValue();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use moment to format date in ISO 8601 format
    const formattedDate = date ? moment(date).toISOString() : undefined;

    console.log("Submitting Edited Task:", { id: task.id, title, content, formattedDate });

    // Save the task with formatted date using moment
    editTask(task.id, title, content, formattedDate);

    setIsOpen(false); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className='rounded-full p-3 bg-edit-color'>
          <CiEdit size={24} color="#ffffff" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Update the title, content, and date for this task.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="title" className="text-right">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="content" className="text-right">Note</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col items-start gap-2'>
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? moment(date).format("MMMM Do, YYYY") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate} 
                    required
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

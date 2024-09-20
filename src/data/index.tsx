import { CiSettings, CiStar } from "react-icons/ci";
import { NavLink } from "../types";
import { MdTask } from "react-icons/md";


export const NAVLINKS: NavLink[] = [
    {
     icon: <CiSettings size={24} color="#66BB6A" />,
     href: '/',
     label: 'Today'
    },
    {
     icon: <CiStar size={24} color="#66BB6A" />,
     href: '/important',
     label: 'important'
    },
    {
     icon: <MdTask size={24} color="#66BB6A" />,
     href: '/task',
     label: 'Task'
    },
 ]
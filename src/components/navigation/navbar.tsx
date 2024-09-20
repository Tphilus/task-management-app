import { useLocation } from "react-router-dom";


export const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const getLabel = (path: string) => {
    switch (path) {
      case "/":
        return (
          <div className="flex flex-col gap-2" >
            <h1 className=" font-bold text-3xl text-white ">My Day</h1>
            <p className=" text-white" >Today</p>
          </div>
        );
      case "/important":
        return (
            <div className="flex flex-col gap-2" >
              <h1 className=" font-bold text-3xl text-white ">Important</h1>
            </div>
          );
      case "/task":
         return (
            <div className="flex flex-col gap-2" >
              <h1 className=" font-bold text-3xl text-white ">Task</h1>
            </div>
          );
      default:
        return "Unknown Page";
    }
  };

  return (
    <div className=" h-40 bg-dark-green flex items-center px-4 text-text-color ">
      {getLabel(pathName)}
    </div>
  );
};

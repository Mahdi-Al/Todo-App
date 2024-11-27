import { Input, Button } from "@material-tailwind/react";
import ModalForm from "./ModalForm";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SquareIcon from "../assets/square.svg";
import { addTodo } from "../Redux/todosSlice";

import menu from "../assets/menu.svg";
import { useState } from "react";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentDate = new Date();
export default function Header() {
  const [isGridLayout, setIsGridLayout] = useState(true); // Initial layout is grid

  const toggleLayout = () => {
    setIsGridLayout((prev) => !prev); // Toggle the boolean state
  };
  return (
    <>
      <div className=" flex ml-6 justify-end align-bottom w-screen mt-7 lg-max:flex-col lg-max:items-center">
        <div className="">
          <Input
            icon={<MagnifyingGlassIcon className="h-5 w-auto" />}
            label="Search"
          />
        </div>
        <div className="flex-auto w-64 text-center ">
          <p className="  ">
            {currentDate.getFullYear()} {months[currentDate.getMonth()]}{" "}
            {currentDate.getDate()}
          </p>
        </div>
        <div className="flex-auto justify-end w-36">
          <ModalForm>
            <Button
              style={{ background: "#0288d1" }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent the event from bubbling up
              }}
              variant="gradient"
            >
              Add new task
            </Button>
          </ModalForm>
        </div>
      </div>
      <aside className="flex justify-evenly mt-8">
        <img id="icon" src={SquareIcon} onClick={toggleLayout} alt="" />
        <img
          id="icon"
          className=" mr-10 "
          onClick={toggleLayout}
          src={menu}
          alt=""
        />
        <h2>Main (tasks 3 tasks )</h2>

        <select className=" mr-10 " style={{ background: "#e8eaf6" }}>
          <option>Sort by</option>
          <option>Order added</option>
          <option>Earlier first</option>
          <option>Laster first</option>
          <option>Completed first</option>
          <option>Uncompleted first</option>
        </select>
      </aside>
    </>
  );
}

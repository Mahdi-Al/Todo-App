import { Input, Button } from "@material-tailwind/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Cartt from "./Cartt";
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
  return (
    <>
      <div className=" flex ml-6 justify-end align-bottom w-screen mt-7">
        <div className="flex-none ">
          <Input
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            label="Search"
          />
        </div>
        <div className="flex-auto w-64 text-center ">
          <p className="">
            {currentDate.getFullYear()} {months[currentDate.getMonth()]}{" "}
            {currentDate.getDate()}
          </p>
        </div>
        <div className="flex-auto justify-end w-36">
          <Button style={{ background: "#0288d1" }}>Add new task</Button>
        </div>
      </div>
    </>
  );
}

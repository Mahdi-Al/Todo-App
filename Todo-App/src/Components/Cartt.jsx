import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../Redux/todosSlice";
import ModalForm from "./ModalForm";
import { TrashIcon, StarIcon } from "@heroicons/react/24/outline";
import dateIcon from "../assets/date.svg";
import kebabIcon from "../assets/kebab-menu.svg";
import { useState } from "react";
import Alert from "./Alert";
export default function Cartt({ todo }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleToggleStar = () => {
    setIsToggled2(!isToggled2);
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
    console.log("hh");
  };

  const handleEditClick = (todo) => {
    setSelectedTodo(todo); // Set the selected todo
  };

  const handleCloseModal = () => {
    setSelectedTodo(null); // Close the modal
  };

  return (
    <Card className="mt-6 ml-2 w-auto hover:shadow-blue-gray-400">
      <button className="bg-deep-orange-200 w-12 mb-3 rounded-sm" type="button">
        Main
      </button>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {todo.title}
        </Typography>
        <Typography>
          {todo.content} <br />
          <img id="icon" src={dateIcon} alt="" />
          {todo.date}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <hr />
        <article className="flex">
          <button
            className={`btn-in-cart w-28 mt-3 rounded-2xl ${
              isToggled ? "bg-green-500 text-white" : "bg-yellow-600 text-white"
            }`}
            onClick={handleToggle}
          >
            {isToggled ? "Completed" : "Uncompleted"}
          </button>

          <Alert handleRemove={handleRemove}>
            <TrashIcon
              onClick={(e) => {
                e.stopPropagation(); // Prevent the event from bubbling up
                handleRemove();
              }}
              strokeWidth={2.5}
              className={`h-6 w-10 mt-4`}
            />
          </Alert>
          <StarIcon
            onClick={handleToggleStar}
            strokeWidth={2.5}
            className={`h-6 w-10 mt-4 ${isToggled2 ? "text-amber-300" : ""}`}
          />

          <ModalForm>
            <img
              className="mt-4"
              id="icon"
              src={kebabIcon}
              alt=""
              onClick={() => handleEditClick(todo)} // Open the modal on click
            />
          </ModalForm>
        </article>
      </CardFooter>

      {/* Render the ModalForm if a todo is selected */}
      {/* {selectedTodo && (
        <ModalForm
          todo={selectedTodo}
          onClose={handleCloseModal} // Close the modal
        />
      )} */}
    </Card>
  );
}

// PropTypes for Cartt component
Cartt.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../Redux/todosSlice";
import PropTypes from "prop-types";
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
export default function ModalForm({
  todo,

  hidden,
  children,
  currentTodo,
  onSubmit,
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setContent(todo.content);
      setDate(todo.date);
      setOpen(true); // Open the modal when a todo is selected
    }
  }, [todo]);
  const handleAddTask = () => {
    // Validate input before dispatching
    if (title && content && date) {
      const newTodo = { id: Date.now(), title, content, date };
      dispatch(addTodo(newTodo));
      setTitle("");
      setContent("");
      setDate("");

      // handleOpen();
      console.log(title);
      console.log(content);
      console.log(date);
      console.log(newTodo);
    } else {
      // Handle error (e.g., show a notification or alert)
      console.error("All fields are required!");
    }
  };
  const handleSubmit = () => {
    if (!currentTodo) {
      console.error("No currentTodo provided");
      return; // Prevent further execution
    }

    const updatedTodo = {
      id: currentTodo.id, // This will now be safe to access
      title,
      content,
      date,
    };
    onSubmit(updatedTodo); // Call the onSubmit prop
    // Close the modal
  };
  return (
    <>
      {/* <Button
        style={{ background: "#0288d1" }}
        onClick={handleOpen}
        variant="gradient"
      >
        Add new task
      </Button> */}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { onClick: handleOpen });
      })}

      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add a task
          </Typography>

          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Title
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="eg. study for the test"
              name="name"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Date
              </Typography>
              <Input
                type="date"
                color="gray"
                size="lg"
                placeholder="eg. study for the test"
                name="name"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Select a directory
            </Typography>
            <Select
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
              placeholder="1"
              labelProps={{
                className: "hidden",
              }}
            >
              <Option>Main</Option>
              <Option>Scenery</Option>
            </Select>
          </div>

          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-left font-medium"
          >
            Description (Optional)
          </Typography>
          <Input
            rows={7}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="eg. This is a white shoes with a comfortable sole."
            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
            labelProps={{
              className: "hidden",
            }}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            fullWidth
            style={{ background: "#0288d1" }}
            className={`ml-auto ${hidden}`}
            onClick={() => {
              if (currentTodo) {
                handleOpen();
                handleSubmit();
              } else {
                handleAddTask();
                handleOpen();
              }
            }}
          >
            {currentTodo ? "Update Task" : "Add Task"}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
// ModalForm.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   currentTodo: PropTypes.object,
//   onSubmit: PropTypes.func.isRequired,
// };

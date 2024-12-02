import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todosSlice";

export default function ModalForm({
  todo,
  hidden,
  children,
  currentTodo,
  onSubmit,
}) {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: todo ? todo.title : "",
      date: todo ? todo.date : "",
    },
  });

  const helperText = {
    title: {
      required: "Title is required",
      minLength: "Your input should be more than 2 characters",
      maxLength: "Your input should be less than 31 characters",
    },
    date: {
      required: "Date is required",
    },
  };

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
      reset({ title: todo.title, date: todo.date });
      setOpen(true);
    }
  }, [todo, reset]);

  const handleAddTask = () => {
    if (title && content && date) {
      const newTodo = { id: Date.now(), title, content, date };
      dispatch(addTodo(newTodo));
      setTitle("");
      setContent("");
      setDate("");
    } else {
      console.error("All fields are required!");
    }
  };

  const submitter = () => {
    if (!currentTodo) {
      console.error("No currentTodo provided");
      return;
    }

    const updatedTodo = {
      id: currentTodo.id,
      title,
      content,
      date,
    };

    onSubmit(updatedTodo);
  };

  return (
    <form onSubmit={handleSubmit(submitter)}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { onClick: handleOpen });
      })}

      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            {currentTodo ? "Update Task" : "Add Task"}
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
              {...register("title", {
                required: true,
                minLength: 2,
                maxLength: 30,
              })}
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
            {errors.title && (
              <span className="text-red-500">
                {helperText.title[errors.title.type]}
                {console.log(errors)}
              </span>
            )}
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
                {...register("Date", {
                  required: true,
                  minLength: 2,
                  maxLength: 25,
                })}
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
              className="focus:!border-primary group-hover:!border-primary !w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-t-blue-gray-900"
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
            className="focus:!border-primary group-hover:!border-primary !w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-t-blue-gray-900"
            labelProps={{
              className: "hidden",
            }}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            type="submit"
            fullWidth
            style={{ background: "#0288d1" }}
            className={`ml-auto ${hidden}`}
            onClick={() => {
              if (currentTodo) {
                // setDate(currentTodo.date);
                console.log(currentTodo);
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
    </form>
  );
}
// ModalForm.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   currentTodo: PropTypes.object,
//   onSubmit: PropTypes.func.isRequired,
// };

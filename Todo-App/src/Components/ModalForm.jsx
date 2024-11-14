import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todosSlice";
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

export default function ModalForm() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(!open);
  const handleAddTask = () => {
    // Validate input before dispatching
    if (title && content && date) {
      const newTodo = { id: Date.now(), title, content, date };
      dispatch(addTodo(newTodo));
      setTitle("");
      setContent("");
      setDate("");
      handleOpen();
      console.log(title);
      console.log(content);
      console.log(date);
      console.log(newTodo);
    } else {
      // Handle error (e.g., show a notification or alert)
      console.error("All fields are required!");
    }
  };
  return (
    <>
      <Button
        style={{ background: "#0288d1" }}
        onClick={handleOpen}
        variant="gradient"
      >
        Add new task
      </Button>
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
              <Option>Mian</Option>
              <Option>Secendry</Option>
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
            className="ml-auto"
            onClick={handleAddTask}
          >
            Add a task
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

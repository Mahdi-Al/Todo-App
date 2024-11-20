import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Alert({ handleRemove, children }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleConfirmRemove = () => {
    handleRemove(); // Call the remove function passed from Cartt
    handleOpen(); // Close the dialog after removing
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { onClick: handleOpen });
      })}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Remove Todo</DialogHeader>
        <DialogBody>Are you sure you want to remove this todo?</DialogBody>
        <DialogFooter>
          <Button
            className="
          bg-deep-orange-400 m-1"
            onClick={handleOpen}
          >
            No
          </Button>
          <Button className="bg-light-green-400" onClick={handleConfirmRemove}>
            Yes
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

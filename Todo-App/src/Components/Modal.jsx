import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

function Modal({ children, title, Btn, BtnContent, fn }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleFn = () => {
    fn();
    handleOpen();
  };

  return (
    <>
      <Btn onClick={handleOpen} variant="gradient">
        {BtnContent}
      </Btn>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogFooter>
          <Button
            className="mr-1"
            variant="text"
            color="red"
            onClick={handleOpen}
          >
            Cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleFn}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Modal;

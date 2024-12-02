import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";

function Modal({ children, fn }) {
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

function Btn({ children }) {
  return <Button>{children}</Button>;
}

Modal.Btn = Btn;

export default Modal;

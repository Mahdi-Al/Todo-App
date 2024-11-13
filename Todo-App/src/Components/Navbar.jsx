import React from "react";
import Header from "./Header";
import Main from "./Main";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
  Button,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className={`flex h-screen w-full`}>
        <IconButton variant="text" size="lg" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
        {/* Sidebar for larger screens */}
        <div
          className="hidden lg:flex h-screen lg:bg-gray-100 "
          style={{ background: "#e8eaf6" }}
        >
          <Card
            color="transparent"
            shadow={false}
            className="h-full w-full p-4"
          >
            <div className="mb-2 flex items-center gap-4 p-3">
              <Typography variant="h5" color="blue-gray">
                To-Do List
              </Typography>
            </div>
            <div className="p-2">
              <Button style={{ background: "#0288d1" }} fullWidth>
                Add new task
              </Button>
            </div>
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3 "
                  >
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Darectories
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>Secendry</ListItem>
                    <ListItem>Main</ListItem>
                    <button>+New</button>
                  </List>
                </AccordionBody>
              </Accordion>
              {/* Add other accordions and list items as needed */}
              <ListItem>
                <ListItemPrefix></ListItemPrefix>
                All tasks
              </ListItem>
              <ListItem>
                <ListItemPrefix></ListItemPrefix>
                Important tasks
              </ListItem>
              <ListItem>
                <ListItemPrefix></ListItemPrefix>
                Completed tasks
              </ListItem>
              <ListItem>
                <ListItemPrefix></ListItemPrefix>
                Uncompleted tasks
              </ListItem>
            </List>
          </Card>
        </div>

        <div className="flex flex-col flex-1 ">
          {" "}
          {/* Main content area */}
          <Header />
          <Main /> {/* Main content */}
        </div>
      </div>
    </>
  );
}

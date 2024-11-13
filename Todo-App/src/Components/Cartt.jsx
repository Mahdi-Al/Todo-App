import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { TrashIcon, StarIcon } from "@heroicons/react/24/outline";
export default function Cartt({ title, content, date }) {
  return (
    <Card className="mt-6 ml-2 w-auto">
      <button
        className="bg-deep-orange-200 w-12  mb-3 rounded-sm"
        type="button"
      >
        Main
      </button>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {content} {`\n`}
          {date}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <hr />
        <article className="flex">
          <button
            className="btn-in-cart w-28 mt-3  rounded-2xl bg-yellow-300"
            onClick={() => {}}
          >
            Un completed
          </button>
          <TrashIcon strokeWidth={2.5} className={` h-6 w-10 mt-4`}></TrashIcon>
          <StarIcon strokeWidth={2.5} className={` h-6 w-10 mt-4`}></StarIcon>
        </article>
      </CardFooter>
    </Card>
  );
}

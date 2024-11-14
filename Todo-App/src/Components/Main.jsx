import data from "../../data.json";
import Cartt from "./Cartt.jsx";
import { useSelector } from "react-redux";
export default function Main() {
  const todos = useSelector((state) => state.todos);
  // Check if todos is defined and is an array before mapping
  if (!Array.isArray(todos)) {
    return <div>No todos available</div>; // Handle the case when todos is not an array
  }
  return (
    <main className="flex flex-wrap">
      {/* {data.map((task) => (
        <Cartt
          key={task.id}
          title={task.title}
          content={task.Content}
          date={task.date}
        />
      ))} */}

      {todos.map((todo) => (
        <Cartt key={todo.id} todo={todo} /> // Pass the todo object as a prop
      ))}
    </main>
  );
}

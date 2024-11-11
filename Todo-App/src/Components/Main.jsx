import data from "../../data.json";
import Cartt from "./Cartt.jsx";

export default function Main() {
  return (
    <main className="flex flex-wrap">
      {data.map((task) => (
        <Cartt
          key={task.id}
          title={task.title}
          content={task.Content}
          date={task.date}
        />
      ))}
    </main>
  );
}

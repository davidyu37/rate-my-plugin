import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import PluginCard from "./components/plugin-card";

const SignInButton = () => (
  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
    Sign in with Google
  </button>
);

// A component for the filter section
const Filters = () => (
  <div className="navbar bg-inherit px-2 pb-0 border-b-2 border-b-base-200 rounded-b-none md:rounded-lg md:rounded-b-none overflow-x-auto whitespace-nowrap">
    <button className="mx-2 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded">
      All
    </button>
    <button className="mx-2 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded">
      Need feedback
    </button>
    <button className="mx-2 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded">
      Next
    </button>
    <button className="mx-2 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded">
      In Progress
    </button>
    <button className="mx-2 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded">
      Complete
    </button>
    <button className="mx-2 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded">
      Most Voted
    </button>
    <button className="mx-2 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded">
      Most Recent
    </button>
  </div>
);

// A component for a single task
const Task = ({ status, description, votes }) => <PluginCard />;

// A component for the list of tasks
const TaskList = ({ tasks }) => (
  <div className="flex flex-wrap">
    {tasks.map((task, index) => (
      <Task key={index} {...task} />
    ))}
  </div>
);

export default async function Home() {
  // console.log(categories);

  const tasks = [{ status: "good", description: "dafsd", votes: 12 }];
  return (
    <div className="max-w-screen-md md:mx-auto md:pt-10">
      <div className="navbar bg-base-100 shadow-md px-2 md:mb-3 md:rounded-lg">
        <div className="flex flex-col justify-start select-none rounded-lg px-4 py-2">
          <span className="text-2xl font-bold">Rate my Plugins</span>
          <span className="text-xs">or find a plugin</span>
        </div>
      </div>
      <Filters />
      <TaskList tasks={tasks} />
    </div>
  )
}

import { Layout } from "../components/Layout/Layout";
import { AppBar } from "../components/AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  return (
    <Layout>
      <AppBar/>
      <TaskForm/>
      <TaskList/>
    </Layout>
  );
};

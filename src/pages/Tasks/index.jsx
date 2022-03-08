import Task from "../../component/TaskCard/index.jsx";
import Container from "./styles";
import { useEffect, useState } from "react";
import CreateTask from "../../component/CreateTask/index.jsx";
import Button from "../../component/Button/index.jsx";
import api from "../../api/api";
import NoData from "../../assets/NoData.svg";

const Tasks = ({ openCreateTasks, setCreateTask }) => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(3);
  const [open, setOpenDrawer] = useState(false);
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [edit, setEdit] = useState(false);
  const [indexToEdit, setEditIndex] = useState(-1);
  const [showAlert, setShowAlert] = useState(false);
  const [filterOn, setFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  const SetDrawer = (status, value) => {
    setOpenDrawer(status);
    setCreateTask(status);
    setEdit(status);
    if (value.id >= 0) {
      setTask(value);
      setEditIndex(value.id);
    }
  };

  const removeTask = async (index, status) => {
    setEditIndex(index);
    setShowAlert(true);
    if (status) {
      const response = await api.finishTodo(index);
      setOpenDrawer(true);
      setOpenDrawer(false);
      if (response.status == 200) {
        setShowAlert(false);
      }
    }
  };

  const RemoveRange = () => {
    from - Math.ceil(window.screen.width / 300) < count
      ? setFrom(0)
      : setFrom(from - 3);
    from - Math.ceil(window.screen.width / 300) < count
      ? setTo(3)
      : setTo(to - 3);
  };
  const AddRange = () => {
    from + Math.ceil(window.screen.width / 300) >= count
      ? count - 3 < 0
        ? setFrom(0)
        : setFrom(count - 3)
      : setFrom(from + 3);
    from + Math.ceil(window.screen.width / 300) >= count
      ? count <= 0
        ? setFrom(0)
        : setTo(count)
      : setTo(to + 3);
  };

  useEffect(() => {
    setOpenDrawer(openCreateTasks);
  }, [openCreateTasks]);

  useEffect(async () => {
    setLoading(true);

    const response = await api.listTodos(
      Math.ceil(window.screen.width / 300),
      from
    );
    setCount(response.data.count);
    setTasks(response.data.tasks || []);
    setLoading(false);
  }, [open, from]);

  const returnTask = (value, index) => {
    return (
      <Container.Card key={index}>
        <Task task={value} />
        <div className="Buttons">
          <Button
            onClick={() => SetDrawer(true, value)}
            disabled={value?.finishedAt != null ? true : false}
            style={{
              backgroundColor:
                value?.finishedAt != null ? "rgba(255,255,255, 0.5)" : "#fff",
              color: "#000",
            }}
          >
            Edit
          </Button>
          <Button
            classComponent="RedButton"
            onClick={() => {
              removeTask(index, false);
            }}
            style={{
              color: "black",
            }}
          >
            Finish
          </Button>
        </div>
      </Container.Card>
    );
  };

  return (
    <Container>
      <Container.Left onClick={() => RemoveRange()}></Container.Left>
      <div className="Filter">
        <input
          type="checkbox"
          onChange={() => setFilter(!filterOn)}
          checked={filterOn}
        ></input>
        Filter Overdue
      </div>
      <span className="ContainerCards">
        {count == 0 && !loading && (
          <span className="NoData">
            <div>Try create a task!</div>
            <img src={NoData}></img>
          </span>
        )}
        {loading ? (
          <Container.Loading>
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Container.Loading>
        ) : (
          tasks.map((value, index) =>
            filterOn ? (
              value.late ? (
                returnTask(value, index)
              ) : (
                <></>
              )
            ) : (
              returnTask(value, index)
            )
          )
        )}
      </span>
      <Container.Right onClick={() => AddRange()}></Container.Right>
      {showAlert && (
        <Container.Confirm>
          <div>
            <div>Finish task?</div>
            <div>Did you really finish this task?</div>
            <div>
              <Button
                onClick={() => {
                  setShowAlert(false);
                }}
                classComponent="WhiteButton"
                style={{ color: "#000" }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  removeTask(indexToEdit, true);
                }}
                classComponent="RedButton"
                style={{ color: "#000" }}
              >
                Finish
              </Button>
            </div>
          </div>
        </Container.Confirm>
      )}
      {open && (
        <CreateTask
          close={() => SetDrawer(false, task)}
          dataTask={task}
          indexTask={edit ? indexToEdit : -1}
        />
      )}
    </Container>
  );
};

export default Tasks;

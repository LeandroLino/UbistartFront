import { useEffect, useState } from "react";
import Container from "./styles";
import Button from "../Button/index.jsx";
import api from "../../api/api";
import Input from "../Input";

const CreateTask = ({ close, indexTask, dataTask }) => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(true);

  const createTaskFunc = async () => {
    if (!deadline || !description) {
      setValidate(false);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    let response;
    if (indexTask >= 0) {
      response = await api.updateTodo({ description, deadline }, indexTask);
    } else {
      response = await api.createTodo({ description, deadline });
    }
    setTask(response.data.response);
    if ([201, 200].includes(response.status)) {
      setLoading(false);
      close();
    }
    setLoading(false);
  };

  useEffect(() => {
    if (dataTask.finishedAt) {
      close();
    }
    if (indexTask >= 0) {
      setDeadline(dataTask.deadline);
      setDescription(dataTask.description);
    }
  }, [indexTask]);

  return (
    <Container>
      <div onClick={() => close()}></div>
      <Container.SubContainer>
        <div>Create Task</div>
        <div>
          <div>Description:</div>
          <Input
            onClick={() => setValidate(true)}
            validate={validate}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setValidate(true);
            }}
          />
          {/*<input
  ></input>*/}
        </div>
        <div>
          <div>DeadLine:</div>
          <Input
            type="date"
            validate={validate}
            value={deadline.substring(0, 10)}
            onChange={(e) => {
              setDeadline(new Date(e.target.value).toISOString());
              setValidate(true);
            }}
          />
        </div>

        <Container.Buttons>
          <Button
            classComponent="WhiteButton"
            style={{
              width: "10vw",
              height: "5vh",
              marginTop: "0",
              marginLeft: "10px",
              color: "#000",
              fontSize: "0.8em",
            }}
            children="Cancel"
            onClick={() => close()}
          />
          <Button
            loading={loading}
            style={{
              width: "10vw",
              height: "5vh",
              marginTop: "0",
              marginLeft: "10px",
              fontSize: "0.8em",
            }}
            children={indexTask >= 0 ? "Edit" : "Create"}
            onClick={() => createTaskFunc()}
          />
        </Container.Buttons>
      </Container.SubContainer>
    </Container>
  );
};

export default CreateTask;

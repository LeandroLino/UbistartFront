import Container from "./styles";

const TaskCard = ({ task }) => {
  console.log(task);
  return (
    <Container>
      <Container.Texts>Description: {task.description}</Container.Texts>
      <Container.Texts>
        Deadline:
        {task.deadline.substring(0, 10).split("-").reverse().join(" ")}
      </Container.Texts>
      <Container.Texts>
        Email:
        {task.user.email}
      </Container.Texts>
      {task.finishedAt && (
        <Container.Texts>
          Finshed at:{" "}
          {task.finishedAt.substring(0, 10).split("-").reverse().join(" ")}
        </Container.Texts>
      )}
      {task.late && <Container.Texts late={true}>Lated</Container.Texts>}
    </Container>
  );
};

export default TaskCard;

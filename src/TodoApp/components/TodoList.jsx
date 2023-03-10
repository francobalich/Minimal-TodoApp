import { Todo } from "./Todo"

export const TodoList = ({Title}) => {
  return (
    <>
    <Title Title={Title}/>
      <div className="TodoContainer">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </>
  )
}

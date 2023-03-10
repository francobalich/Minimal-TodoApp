import './styles.css'
import { AddButton, ProfileIcon, Title, Todo, TodoList } from './TodoApp/components'

export const App = () => {
  return (
    <div className="App">
      <ProfileIcon />

      <TodoList Title="Hoy" />
      <TodoList Title="Mañana" />

      <AddButton />
    </div>
  )
}

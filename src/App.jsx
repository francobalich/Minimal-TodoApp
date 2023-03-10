import './styles.css'
import { AddButton, ProfileIcon, Title, Todo, TodoList } from './TodoApp/components'

export const App = () => {
  return (
    <div className="App">
      <ProfileIcon />

      <TodoList title="Hoy" />
      <TodoList title="Mañana" />

      <AddButton />
    </div>
  )
}

import './styles.css'
import { AddButton, ProfileIcon, Title, Todo } from './TodoApp/components'

export const App = () => {
  return (
    <div className="App">
      <Title Title='Hoy'/>
      <ProfileIcon />
      <Todo />

      <Title Title='Mañana'/>
      <AddButton/>
    </div>
  )
}

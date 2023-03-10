import './styles.css'
import { AddButton, ProfileIcon, Title, Todo } from './TodoApp/components'

export const App = () => {
  return (
    <div className="App">
      <Title />
      <ProfileIcon />
      <Todo />
      <AddButton/>
    </div>
  )
}

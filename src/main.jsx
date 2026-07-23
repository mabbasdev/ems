import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext'
import TaskContext from './context/TaskContext'

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <TaskContext>
      <App />
    </TaskContext>
  </AuthContext>
)

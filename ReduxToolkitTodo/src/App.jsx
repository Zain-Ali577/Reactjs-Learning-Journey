import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import ThemeSwitcher from './Components/ThemeSwitcher'


function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors ">
      <header className="p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Redux Toolkit Todo Project </h1>
        <ThemeSwitcher />
      </header>

      <main className="px-4 pb-10">
        <div className="max-w-xl mx-auto">
          <AddTodo />
          <Todos />
        </div>
      </main>
    </div>

  )
}

export default App


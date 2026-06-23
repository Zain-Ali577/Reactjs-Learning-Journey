import React, { useEffect, useState } from 'react'

function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'light' || saved === 'dark' ? saved : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="px-3 py-2 rounded bg-white/10 hover:bg-white/15 border border-white/10 text-sm"
    >
      {theme === 'dark' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

export default ThemeSwitcher


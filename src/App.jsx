import { useState } from 'react'
import outline from './outline.json'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">AIDM7350 Group Project</h1>
        <p className="text-gray-600">Phase 1: Setup & Design - Hello World</p>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {outline.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        <p>Built with React + Vite + Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App

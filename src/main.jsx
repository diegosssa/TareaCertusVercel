import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AppContext } from './context/AppContext'
import { DataProvider } from './context/DataContext'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContext>
      <React.StrictMode>
        <DataProvider>
          <Toaster />
          <Principal />
        </DataProvider>
      </React.StrictMode>
    </AppContext>
  </BrowserRouter>
)

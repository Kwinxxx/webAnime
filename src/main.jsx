import { createRoot } from 'react-dom/client'
import { AppRouter } from './app/router'
import './app/styles/index'


createRoot(document.getElementById('root')).render(<AppRouter/>);

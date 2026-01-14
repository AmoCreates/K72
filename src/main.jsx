import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

import 'remixicon/fonts/remixicon.css'
import StairEffects from './components/common/StairEffects.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StairEffects/>
            <App />
           
    </BrowserRouter>
)

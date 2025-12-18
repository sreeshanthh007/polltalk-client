
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SocketProvider } from './provider/SocketProvider.tsx'
import { ChatProvider } from './provider/ChatProvider.tsx'
import { PollProvider } from './provider/PollProvider.tsx'

createRoot(document.getElementById('root')!).render(

    <SocketProvider>
     <ChatProvider>
      <PollProvider>
         <App />
      </PollProvider>
     </ChatProvider>
    </SocketProvider>

)

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { MemoHook } from './06-memos/MemoHook'
import "./index.css"
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstogramApp } from './07-useOptimistic/InstogramApp'
import { Toaster } from 'sonner'
import { ClientInformation } from './08-useSuspense/ClientInformation'
import { getUserAction } from './08-useSuspense/get-user.action'
// import { ScrambleWords } from './05-useReducer/ScrambleWordsReduced'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <Suspense fallback={<h1>Cargando...</h1>}>
      <ClientInformation getUser={getUserAction(100)} />
    </Suspense>
  </StrictMode>
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { MessagingAtom, jobsAtom, newtowrkAtom, notificationAtom, totalSelector } from './store/atoms/atoms'

function App() {


  return <RecoilRoot>
    <Topbar></Topbar>
  </RecoilRoot>

}


function Topbar(){
  const [networkCount, setNetorkcount] = useRecoilValue(newtowrkAtom)
  const jobCount = useRecoilValue(jobsAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const messageCount = useRecoilValue(MessagingAtom)
  const totalCount = useRecoilState(totalSelector)
  return (
<div>
  <button>Home</button>
  <button>Network({networkCount>100?"99+":networkCount})</button>
  <button>Jobs({jobCount})</button>
  <button>Notifications({notificationCount})</button>
  <button>Messaging({messageCount})</button>

  <button>Me({totalCount})</button>
</div>
  )

}
// https://sum-server.100xdevs.com/notifications
export default App

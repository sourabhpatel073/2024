import React from 'react'
import {useEffect} from 'react'
function AppSetup() {
  function fetchData (){
    //get data
  }

  useEfect(()=>{
    fetchData()
  },[])
  return (
    <div>
      appsetup
    </div>
  )
}

export default AppSetup

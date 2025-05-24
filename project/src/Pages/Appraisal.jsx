import React from 'react'

function Appraisal() {
  const [count , setcount] = useState(0);
  function Inc (){
    setCount(count++)
  }
  return (
    <div>
      Apprarisals
    </div>
  )
}

export default Appraisal

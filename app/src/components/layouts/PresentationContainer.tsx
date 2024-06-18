"use client";

import { ReactNode, useEffect, useState } from "react";

function PresentationContainer({children}:{children:ReactNode}) {
const [showEffect, setShowEffect] = useState<boolean>(false)

    useEffect(()=>{
const timer= setTimeout(() => {
    setShowEffect(true);
}, 1500);


return ()=>{
    clearTimeout(timer);
}
    },[]);
  return (
    <h1 className={`${showEffect && "shadow-text-presentation"} mb-8 pt-60`}>
      {children}
    </h1>
  )
}

export default PresentationContainer

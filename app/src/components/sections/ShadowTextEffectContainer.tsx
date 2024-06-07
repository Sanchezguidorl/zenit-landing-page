"use client";

import { useEffect, useState } from "react";

function ShadowTextEffectContainer({children}:{children:React.ReactNode}) {
  const [showShadow, setShowShadow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShadow(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <div className={` ${showShadow && "shadow-text-animation"}`}>
    {children}
  </div>;
}

export default ShadowTextEffectContainer;

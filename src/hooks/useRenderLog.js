import { useEffect, useRef } from "react";

const useRenderLog = (componentName = '', max = 0) => {
  const count = useRef(0);
  useEffect(()=>{
    count.current += 1;
    console.log(`rerender ${componentName} ${count.current}`);
    if(max && count.current > max) alert('MAX RERENDER EXCEED') 
  });
}

export default useRenderLog;
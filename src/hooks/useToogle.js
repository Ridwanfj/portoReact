import { useState } from "react";
export default function useToggle(initial=false){
  const [state, setState] = useState(initial);
  const toggle = (v) => setState(s => typeof v === 'boolean' ? v : !s);
  return [state, toggle];
}

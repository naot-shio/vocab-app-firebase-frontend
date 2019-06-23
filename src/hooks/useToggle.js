import useState from "react";
function useToggle(initialVal = false){
  // call useState and reserve a piece of state
  const [state, setState] = useState(initialVal);
  // generalizing what we were doing
  const toggle = () => {
    setState(!state);
  };
  // return piece of state AND a function to toggle it.
  return [state, toggle];
}

export default useToggle;
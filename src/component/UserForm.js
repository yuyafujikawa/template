import {useState, useEffect, useRef} from "react";
import CustomInput from "./CustomInput";

const UserForm = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const cnt = useRef(0);
  const inputRef = useRef();
  const changeHandler = (event) => {
    setInput(event.target.value);
  }
  const submitHandler = () => {
    const val = inputRef.current.value;
    if(!input){
      inputRef.current.focus();
    }else{alert(input);}
  }
  useEffect(()=>{
    //setCount(prev => prev+1);
    // /count+=1;
    cnt.current+=1;
  });

  return(
    <div>
    <CustomInput ref = {inputRef}value = {input} onChange = {changeHandler}></CustomInput>
    <h2>You typed: {input}</h2>
    <h2>Your count: {count}</h2>
    <h2>Your count: {cnt.current}</h2>
    <button onClick = {submitHandler}>submit</button>
    </div>
  );
}

export default UserForm;

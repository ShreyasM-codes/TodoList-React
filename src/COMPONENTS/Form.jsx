import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState(""); //to store single todo
  const [todo, setTodo] = useState({name:"",done:"false"}); 
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",done:"false"}); //after entering to do, input field should empty again
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
      <input
        className={styles.modernInput}
        onChange={(e) => setTodo({name:e.target.value, done:false})}
        value={todo.name}
        type="text"
        placeholder="Enter todo item... "
      />
      <button className={styles.modernButton} type="submit">Add</button>
      </div>
    </form>
  );
}

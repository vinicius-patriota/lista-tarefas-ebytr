import React, { useContext, useState } from 'react';
import TaskContext from '../../context/taskContext';
import './styles.css';

function ItemAdd() {
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleAdd = async () => addTask(description);

  return (
    <div className="item-add">
      <div>
        <label>Nova tarefa:</label>
        <input
          value={description}
          onChange={
            ({ target: { value } }) => setDescription(value)
          }
        />
      </div>
      <button
        onClick={handleAdd}
      >Adicionar</button>
    </div>
  );
}

export default ItemAdd;
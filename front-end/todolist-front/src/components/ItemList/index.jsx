import React, { useContext, useEffect } from 'react';
import TaskContext from '../../context/taskContext';
import ItemRow from '../ItemRow/index';
import './styles.css';

function ItemList() {
  const { tasks, getTasks } = useContext(TaskContext);

  useEffect(()=>{
    if(tasks.length === 0){
      getTasks();
    }
  }, [tasks, getTasks]);

  return (
    <div
      className="item-list"
    >
      {
        tasks.length > 0 && tasks
          .map(({ _id: id, description, check }, index) => (
            <ItemRow 
              key={`${index}${Date.now()}`}
              index={index}
              id={id} 
              description={description} 
              check={check} 
            />
          ))
      }
    </div>
  );
}

export default ItemList;

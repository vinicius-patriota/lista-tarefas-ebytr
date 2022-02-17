import React, { useContext, useState } from 'react';
import TaskContext from '../../context/taskContext';
import { IconTrash, IconEditCircle } from '@tabler/icons';
import './styles.css';

function ItemRow({ index, id, description, check }) {
  const [editMode, setEditMode] = useState(false)
  const [inputDescription, setInputDescription] = useState(description);

  const { putTask, rmTask } = useContext(TaskContext);

  const editHandle = ({ target: { value } }) =>
    setInputDescription(value);

  const editSave = async () => putTask(id, inputDescription, check);

  const changeCheck = async ({ target: { checked } }) => putTask(id, description, checked);

  return (
    <>
      <div className="item-row">
        {editMode ?
          (
            <>
              <div className="item-row-desc">
              <input
                  value={inputDescription} 
                  onChange={editHandle} 
                />
              </div>
              <div>
                <button
                  style={{ marginRight: '5px' }}
                  onClick={editSave}
                >Salvar</button>
                <button
                  onClick={() => setEditMode(false)}
                >Sair</button>
              </div>
            </>
          ) :
          (
            <>
              <input
                type="checkbox"
                id="scales"
                name="scales"
                defaultChecked={check}
                onChange={changeCheck}
              />
              <div
                className="item-row-desc"
              >{description}</div>
              <div className="options" style={{ width: '66px' }}>
                <button
                  style={{ marginRight: '5px' }}
                  onClick={() => setEditMode(true)}
                ><IconEditCircle /></button>
                <button
                  onClick={() => rmTask(id)}
                ><IconTrash /></button>
              </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default ItemRow;

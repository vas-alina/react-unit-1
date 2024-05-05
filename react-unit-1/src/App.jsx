
import styles from './app.module.css'
import { useState } from 'react'





function App() {
const [value, setValue] = useState('');
const [list, setList] = useState([]);
const [error, setError] = useState('');

const onInputButtonClick = () => {
  setError('')
  setValue('')
  const value = prompt('Введите новое значение');
  console.log(value);
  if (value !== null && value.trim().length >= 3) { 
  setValue(value)
  const id = Date.now()
  const createdAt = new Date().toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  const newItem = {id, value, createdAt}
  const newList = [...list, newItem]
  setList(newList)
  console.log(newItem, 'элемент', newList, 'список')
  
    }  else {
      setError('Введенное значение должно содержать минимум 3 символа!')
  }
}
const isValueVaild = value.trim().length >= 3



  return (
    
    <>

      <div className={styles.app}>
        <h1 className={styles['page-heading']}>Ввод значения</h1>
        <p className={styles['no-margin-text']}>Текущее значение:  
        <output className={styles['current-value']}>{value}</output>
        </p>
       {error !== '' && <div className={styles.error} >{error}</div>}
        <div className={styles['buttons-container']}>
    
        <button className={styles.button} onClick={() => onInputButtonClick()}>Ввести новое</button>
        <button className={styles.button} disabled={!isValueVaild}>Добавить в список</button>
      </div>
      <div className={styles['list-container']}>
        <h2 className={styles['list-heading']}>Список:</h2>
        {list.length > 0 ? (
        <ul className={styles.list}> {
          list.map((item) => (
          <li key={item.id} className={styles['list-item']}>{item.value} - {item.createdAt}</li>
        ))} 
        </ul> ) : ( <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
      )}
    </div>
  </div>
    </>
  )
}

export default App


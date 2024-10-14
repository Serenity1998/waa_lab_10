import React, { useEffect, useState } from 'react';

import './output.css';
import Header from './components/header';
import Footer from './components/footer';
import Todo from './components/todo';
import { ItemPrototype } from './components/todo/item';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [list, setList] = useState<ItemPrototype[]>([])
  const [checkedList, setCheckedList] = useState<ItemPrototype[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch("http://localhost:3004/todos")
    const data: ItemPrototype[] = await response.json()
    setList([...data])
    setCheckedList(data.filter(i => i.isChecked))
  }

  const addNewTodo = (name: string) => {
    setList([...list, { name, id: `${uuidv4()}`, isChecked: false }])
  }

  const deleteItems = () => {
    setList(list.filter(i => !checkedList.find(j => j.id == i.id)))
    setCheckedList([])
  }

  const checkItem = (item: ItemPrototype) => {
    setCheckedList([...checkedList, { ...item, isChecked: true }])
    setList(list.map(i => {
      if (i.id == item.id) {
        i.isChecked = true
      }
      return i
    }))
  }

  const unCheckItem = (id: string) => {
    setCheckedList(checkedList.filter(i => i.id !== id))
    setList(list.map(i => {
      if (i.id == id) {
        i.isChecked = false
      }
      return i
    }))
  }

  const deleteAll = () => {
    setList(list.map(i => {
      i.isChecked = true
      return i
    }))
    setCheckedList(list)

  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addNewTodo={addNewTodo}></Header>
        <Todo items={list} checkItem={checkItem} unCheckItem={unCheckItem}></Todo>
        <Footer deleteAll={deleteAll} deleteAction={deleteItems} total={list.length} finished={checkedList.length}></Footer>
      </div>
    </div >
  );
}

export default App;

import React from 'react'
import Container from './primitives/Container'
import TodoList from './TodoList'
import AddTodoPanel from './AddTodoPanel'
import Filters from './Filters'
import Heading from './primitives/Heading'

const MainContainer = () => {
  return (
    <Container className="main-container">
      <Heading>To Do List</Heading>
      <Container className="filtersadd-container">
        <AddTodoPanel />
        <Filters />
      </Container>
      <TodoList />
    </Container>
  )
}

export default MainContainer

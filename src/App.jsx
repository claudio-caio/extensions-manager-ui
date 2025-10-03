import { Header } from "./components/Header"
import { Filters } from "./components/filters"
import { CardsContainer } from "./components/Cards-Container"
import { useState } from "react"




function App() {
  
  const [filter, setFilter] = useState('All')

 //console.log('FILTRO ACTUAL: ', filter)

  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center"> 
      <section className="W-[345] my-6 md:w-[672px] xl:w-[1170px]">
        <Header/>
        <Filters filter={filter} setFilter={setFilter} />
        <CardsContainer filter={filter}/>
      </section>
    </main>
  )
}

export default App


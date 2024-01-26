import { useEffect, useState } from 'react'
import axios from 'axios'
import Pages from './Components/Pages'
import './App.css'
import './main.css'

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [loader, setLoader] = useState(false)

  function CallShayari() {
    setLoader(true)
    axios.get('https://farzi-vichar-api.vercel.app/language/hindi').then((response) => {
      // console.log(response.data)
      setLoader(false)
      const data = response.data
      const randomnum = Math.floor(Math.random() * data.length)
      // console.log(randomnum)
      const randomshayari = data[randomnum]
      // console.log(randomshayari)
      setQuote(randomshayari.content)
      setAuthor(randomshayari.author)
    }).catch((error) => {
      setLoader(false)
      console.log("error", error)
    })
  }

  useEffect(() => {
    CallShayari()
  }, [])



  return (
    <>

      <Pages quote={quote} author={author} CallShayari={CallShayari} loader={loader} />

      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
     
    </>
  )
}

export default App

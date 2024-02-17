import { useEffect, useState } from 'react'
import axios from 'axios'
import Pages from './Components/Pages'
import './App.css'
import './main.css'
import Dropdown from './Components/Dropdown'
import "bootstrap/dist/js/bootstrap";

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [loader, setLoader] = useState(false)
  const [language, setLanguage] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("hindi");

  function getLanguage(lang) {
    setSelectedLanguage(lang);
  }


  useEffect(() => {
      axios.get("https://farzi-vichar-api.vercel.app/language-list").then((res) => {
        setLanguage(res.data);
      }).catch((error) => {
        console.log(error)
      })

      axios.get(`https://farzi-vichar-api.vercel.app/language/${selectedLanguage}/random`).then((response) => {
        const data = response.data;
        setQuote(data.content);
        setAuthor(data.author);
      })
  }, [selectedLanguage])

  // console.log(language)

  function CallShayari() {
    setLoader(true)
    axios.get(`https://farzi-vichar-api.vercel.app/language/${selectedLanguage}/random`).then((response) => {
      // console.log(response.data)
      setLoader(false)
      const data = response.data;

      // const randomnum = Math.floor(Math.random() * data.length)
      // const randomshayari = data[randomnum]
      
      setQuote(data.content);
      setAuthor(data.author);
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
      <Dropdown languageList={language} setSelectedLanguage={getLanguage}/>
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

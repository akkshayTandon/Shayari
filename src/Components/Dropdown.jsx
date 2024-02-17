import './Dropdown.css'

export default function Dropdown({ languageList, setSelectedLanguage }) {

  return (
    <>
      <div className="position-absolute start-50 paste-button">
        <select className="options" onChange={(e) => setSelectedLanguage(e.target.value)} defaultValue={"hindi"}>
          {
            languageList.map((lang) => {
              return <option key={lang} className="option" value={lang}>{lang}</option>
            })
          }
        </select>
      </div>
    </>
  )
}
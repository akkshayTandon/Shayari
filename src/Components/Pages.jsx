
import Copytext from './CopyText'
import './Pages.css'
export default function Pages({ quote, author, CallShayari, loader }) {




  return (
    <>
      <main>
        <div className="card h-100 bg-transparent  border-0" >
          <div className="card-body">
            <h1 className="card-title text-light"><img src="/shayarilogo.png" alt="" /></h1>
            
            <hr className='text-light' />


            {
              loader ?
                <p className="placeholder-glow ">
                  <span className="placeholder col-12"></span>
                </p> :
                <p className='card-title  fs-3' style={{color:"burlywood"}}>{quote}</p>
            }
            {
              loader ?
                <p className="placeholder-glow ">
                  <span className="placeholder col-12"></span>
                </p> :
                null
            }

            {
              loader ?
                <p className="placeholder-glow ">
                  <span className="placeholder col-12"></span>
                </p> :
                null
            }

            {
              loader ?
                <p className="placeholder-glow position-absolute end-0 me-3" style={{ width: "10rem" }}>
                  <span className="placeholder col-12"></span>
                </p> :
                <p className='card-title author text-light fs-4'> - {author}</p>
            }



            <button onClick={CallShayari} type="button" className="stack-btn-26 mt-5"><span>अगली शायरी</span></button>
          </div>
        </div>

        <Copytext quote={quote}/>
      </main>

      <a href="https://www.instagram.com/farzivichar?igsh=NnV5NWFxNXR6NWxh" target="_blank" className="insta">
        <img src="/logo-instagram.svg" alt="insta" className='insta'/> </a>

    </>
  )
}




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
                <p className='card-title text-light fs-3'>{quote}</p>
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
                <p className='card-title author text-light fs-4'> <ion-icon name="remove-outline"></ion-icon> {author}</p>
            }



            <button onClick={CallShayari} type="button" className="stack-btn-26 mt-5"><span>अगली शायरी</span></button>
          </div>
        </div>

        {/* <span className="share m-1"> <ion-icon name="share-outline"></ion-icon></span> */}
        <Copytext quote={quote}/>
      </main>

      <a href="https://www.instagram.com/farzivichar?igsh=NnV5NWFxNXR6NWxh" target="_blank" className="insta"> <ion-icon name="logo-instagram"></ion-icon></a>

    </>
  )
}



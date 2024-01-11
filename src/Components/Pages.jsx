
import Copytext from './CopyText'
import './Pages.css'
export default function Pages({ quote, author, CallShayari, loader }) {




  return (
    <>
      <nav>
        <a href="https://github.com/akkshayTandon/farzi-vichar-api" target='_blank' rel='noreferrer'>
          <img src="/github.svg" alt='github' />
        </a>
       

        <a href="https://www.instagram.com/farzivichar?igsh=NnV5NWFxNXR6NWxh" target="_blank" rel='noreferrer' >
          <img src="/logo-instagram.svg" alt="instagram" />
        </a>
      </nav>

      <main>
        <div className="card  bg-transparent  border-0 " >
          <div className="card-body">
            <h1 className="card-title text-light"><img src="/shayarilogo.png" alt="" /></h1>

            <hr className='text-light' />


            {
              loader ?
                <p className="placeholder-glow ">
                  <span className="placeholder col-12"></span>
                </p> :
                <p className='card-title  fs-3' style={{ color: "burlywood" }}>{quote}</p>
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

        <Copytext quote={quote} />
      </main>

     
      <footer className=' position-absolute bottom-0 '>
        <div className=' d-flex justify-content-center align-items-center gap-3'>|<span>Made by :</span>
        <a href="https://hardiksingh-hsm.netlify.app/" target='_blank' rel='noreferrer'>@Hardik Singh</a> &
        <a href="https://akkshaytandon.github.io/MyLinkTree/" target='_blank' rel='noreferrer'>@Akkshay Tandon</a>
        |
        </div>
        <div className=' ext d-flex justify-content-center align-items-center mt-3'>
        <a href="https://microsoftedge.microsoft.com/addons/detail/random-shayari-generator/niaelonohcpmicnibpfegdkndgciphbe" target='_blank' rel='noreferrer' className=' d-flex justify-content-center align-items-center gap-1'>Get as an Extension
        <img src="/extension.svg" className='cls-2' alt="ext"/>
        </a>
        </div>
      </footer>

    </>
  )
}



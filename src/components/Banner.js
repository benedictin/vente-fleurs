import  logo from'../assets/logo.png'
import '../styles/Banner.css'

function Banner(){
    return (
        <div className="lmj-banner">
           <div className='title'>
                <h1>La maison jungle</h1>
                <img src={logo} alt='la maison jungle' className='lmj-logo'/>
           </div>
           <div className='icons-button'>
                <span className='bi bi-search'></span>
                <span className='bi bi-cart4'></span>
                <span className='bi bi-person'></span>
           </div>
        </div>
        
    )
}

export default Banner

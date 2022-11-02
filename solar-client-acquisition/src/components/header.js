import './header.css';
import Logo from './copyWriteAmerica.png'

export default function Header(){
    return(
        <div className='header-name'>
            <img id='logo' src={Logo} alt='united states of america shape with united states flag to fill the inside of shape'/>
        </div>
    )
}
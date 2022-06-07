import React from 'react'
import{Link} from 'react-router-dom'
import './Style.css'
import {FiMenu} from 'react-icons/fi'
export default function Header() {
    function toggle_full_screen()
    {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen))
        {
            if (document.documentElement.requestFullScreen){
                document.documentElement.requestFullScreen();
            }
            else if (document.documentElement.mozRequestFullScreen){ /* Firefox */
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullScreen){   /* Chrome, Safari & Opera */
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            else if (document.msRequestFullscreen){ /* IE/Edge */
                document.documentElement.msRequestFullscreen();
            }
        }
        else
        {
            if (document.cancelFullScreen){
                document.cancelFullScreen();
            }
            else if (document.mozCancelFullScreen){ /* Firefox */
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen){   /* Chrome, Safari and Opera */
                document.webkitCancelFullScreen();
            }
            else if (document.msExitFullscreen){ /* IE/Edge */
                document.msExitFullscreen();
            }
        }
    }



  return (
    <div className="head">
    <div className="logo" onClick={toggle_full_screen}>
        <img className="logo-img" src="https://blogger.googleusercontent.com/img/a/AVvXsEga_du5gKQw7qciPWTwHyStMAvGDahtAI_gx4s7_x8BxHLpHkhRoXWi_DJCHNMrKCX82YL23F1Ut_9ifrYXcHM7piaGVuEZTVGtWAA7B5LiX0F1fzmkvYU0zXXr3Fq5mWYCeskl9Pp0JyhhoxADIchV7FvwZVHlicLY5u9ve_cELdfZGvPStNKkR9_zMA" alt="logo"/>
    </div>
    <div className="menu">
        <Link style={{color: 'rgb(77, 77, 77)'}} to={'/'}>
        <FiMenu/>
        </Link>
    </div>
</div>
  )
}

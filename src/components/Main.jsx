import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
const Main = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideSrcSet)
        return () => {
            window.removeEventListener('resize', handleVideSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to("#hero", { opacity: 1, delay: 1.9  })
        gsap.to('#cta', { opacity: 1, y: -50, delay: 1.9  })
    }, [])
    return (
        <section className='w-full nav-height bg-black position-relative'>
            <div className='h-[5/6] w-full flex-center flex-col'>
                <p id="hero" className='hero-title'>iphone-15 pro</p>
                <div className='md:w-[10/12] w-[9/12]'>
                    <video className='pointer-events-none'
                        autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
            </div>

        </section>
    )
}

export default Main
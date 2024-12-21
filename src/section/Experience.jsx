import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');
  const imageRef=useRef();
  const [picId,setPicId]=useState(-1);
  const [isClosing, setIsClosing] = useState(false)
  useEffect(() => {
    if (imageRef.current) {
      if (picId !== -1 && !isClosing) {
        // Opening animation
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 1,
            y: 1000,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
          }
        )
      } else if (isClosing) {
        // Closing animation
        gsap.to(imageRef.current, {
          opacity: 0,
          scale: 1,
          y: 1000,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            setPicId(-1)
            setIsClosing(false)
          },
        })
      }
    }
  }, [picId, isClosing])
  const handleClosee=()=>{
    setIsClosing(true)
    // setPicId(-1)
  }
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5 flex justify-between ">
                    <div>
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-sm mb-5">
                        {item.pos} -- <span>{item.duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>

                    </div>

                    <div className="self-auto p-2 h-12 w-12 hover:border-blue-500 hover:scale-105 transition-all ease-in-out duration-500"
                    onClick={() => setPicId(index)}
                    >
                      <img className="min-w-12 min-h-12  object-contain" src='/assets/pages.png' alt="page" />
                    </div>
                    {(picId===index && picId!==-1)&&
                    <div  className='fixed  bg-black bg-opacity-30 top-0 left-0 z-50  min-h-[100vh] min-w-[100vw] max-h-[100vh] overflow-y-scroll'
                    onClick={()=>{picId===0?setAnimationName('salute'):picId===1?setAnimationName('clapping'):setAnimationName('victory')}}
                    onPointerOver={() =>{picId===0?setAnimationName('salute'):picId===1?setAnimationName('clapping'):setAnimationName('victory')} }
                    >
                      <div className='p-10 w-full h-full flex justify-center'>
                      <img ref={imageRef} className='w-[50%] h-[50%] object-contain' src={`/certificate/certificate-${picId+1}.jpg`} alt="spotlight" />
                       <X className='absolute top-5 right-5 cursor-pointer text-red-400 ' onClick={()=>handleClosee() } />
                      </div>
                    </div> }


                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
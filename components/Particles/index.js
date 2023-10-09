import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import Img1 from '/public/sb-logo.jpeg';
import Img2 from '/public/sb-logo.jpeg';
import Img3 from '/public/img-1.png';
import Img4 from '/public/img-6.png';
import Img5 from '/public/img-8.png';

export default function ParticlesComponent() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 15,
              density: { enable: true, value_area: 850 },
            },

            shape: {
              type: ['images'],
              image: [
                {
                  src: `${Img1?.src}`,
                  width: 100,
                  height: 100,
                },
                {
                  src: `${Img2?.src}`,
                  width: 75,
                  height: 75,
                },
                {
                  src: `${Img3?.src}`,
                  width: 20,
                  height: 23,
                },
                {
                  src: `${Img4?.src}`,
                  width: 50,
                  height: 53,
                },
                {
                  src: `${Img5?.src}`,
                  width: 50,
                  height: 53,
                },
              ],
            },
            opacity: {
              // value: 0.57626369048095938,
              value: 1,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 8,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.8, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'bubble' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 200,
                size: 30,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
          background: {
            color: '#0000000',
            image: '',
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
          },
        }}
      />
    </>
  );
}

// app/(main)/components/ParticlesBackground.tsx
'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: 'transparent',
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#3b82f6', // Tailwind blue-500
            },
            links: {
              color: '#93c5fd', // Tailwind blue-300
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
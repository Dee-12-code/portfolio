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
              value: ['#3b82f6'], // Multiple colors for variety
            },
            links: {
              color: '#93c5fd', // White links for a sleek look
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: 'none', // No specific direction for movement
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: true, // Random movement
              speed: 2, // Increase speed for more action
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800, // Increase density for a fuller look
              },
              value: 120, // More particles for a denser background
            },
            opacity: {
              value: 0.5, // Slightly higher opacity for a bolder look
            },
            shape: {
              type: ['circle', 'triangle', 'polygon'], // Variety of shapes
            },
            size: {
              value: { min: 1, max: 5 }, // Larger particles for more impact
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

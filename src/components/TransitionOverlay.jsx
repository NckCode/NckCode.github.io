import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const TransitionOverlay = () => {
  const overlayRef = useRef(null);
  const location = useLocation();
  const animationRef = useRef(null);

  useEffect(() => {
    // Kill any existing animation before starting a new one
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Create and start the animation timeline on each location change
    const tl = gsap.timeline({
      paused: true, // Start paused
      onComplete: () => {
        // Optional: callback after animation finishes
      }
    });

    // Animate in (cover the screen)
    tl.set(overlayRef.current, { autoAlpha: 1 }); // Instantly visible

    // Animate out (reveal the new page)
    tl.to(overlayRef.current, {
      autoAlpha: 0, // Fade to hidden
      duration: 0.8, // Slightly longer duration
      ease: 'power2.out',
      delay: 0.3, // Small delay to show black screen
    });

    // Store the timeline reference
    animationRef.current = tl;

    // Play the timeline
    tl.play();

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [location.pathname]); // Depend on location.pathname to re-run on route change

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        zIndex: 40, // Lower z-index than Navbar
        pointerEvents: 'none', // Allow clicks to pass through when hidden
        opacity: 1, // Start visible temporarily until the first animation runs
      }}
    />
  );
};

export default TransitionOverlay; 
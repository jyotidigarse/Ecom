import React, { useEffect } from 'react';

const BootstrapCDN = () => {
  useEffect(() => {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    bootstrapLink.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
    bootstrapLink.crossOrigin = 'anonymous';

    document.head.appendChild(bootstrapLink);

    const iconsLink = document.createElement('link');
    iconsLink.rel = 'stylesheet';
    iconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css';

    document.head.appendChild(iconsLink);

    // Ensure viewport meta tag for proper scaling on mobile devices
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1';
    document.head.appendChild(viewportMeta);

    return () => {
      document.head.removeChild(bootstrapLink);
      document.head.removeChild(iconsLink);
      document.head.removeChild(viewportMeta); // Clean up the viewport meta tag on unmount
    };
  }, []); 

  return null; // Since this component is purely for side effects (DOM manipulation), return null
}

export default BootstrapCDN;


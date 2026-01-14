// custom typefaces
// import "typeface-montserrat";
// import "typeface-merriweather";

import "prismjs/themes/prism.css";
import "./src/styles/global.css";

export const onClientEntry = () => {
  // Force unregister any lingering service workers to prevent caching issues
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }
};

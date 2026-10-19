import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_PAGE_TITLES = {
  '/': 'Home | Pavana Projects',
  '/about': 'About | Pavana Projects',
  '/services': 'Services | Pavana Projects',
  '/contact': 'Contact | Pavana Projects',
};

export default function SEOHead({ title, description }) {
  const location = useLocation();

  useEffect(() => {

    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    const cleanPath = location.pathname.replace(/\/$/, '') || '/';


    // Prefer a page-provided title; otherwise use the route defaults.
    if (title) {
      if (title.endsWith(' | Pavana Projects') || title.endsWith(' |Pavana Projects')) {
        document.title = title;
      } else if (title === 'Home') {
        document.title = 'Home | Pavana Projects';
      } else {
        document.title = `${title} | Pavana Projects`;
      }
    } else if (ROUTE_PAGE_TITLES[cleanPath]) {
      document.title = ROUTE_PAGE_TITLES[cleanPath];
    } else {
      document.title = 'Home | Pavana Projects';
    }


    if (description) {
      // Keep the browser description and social preview description in sync.
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }
  }, [location.pathname, title, description]);

  return null;
}

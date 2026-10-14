import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_PAGE_TITLES = {
  '/': 'Pavana Projects',
  '/about': 'About | Pavana Projects',
  '/services': 'Services | Pavana Projects',
  '/projects': 'Projects | Pavana Projects',
  '/contact': 'Contact | Pavana Projects',
};

export default function SEOHead({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change if no anchor hash is present
    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    const cleanPath = location.pathname.replace(/\/$/, '') || '/';

    // Update document title strictly to requested format
    if (title) {
      if (title === 'Home' || title === 'Pavana Projects') {
        document.title = 'Pavana Projects';
      } else if (title.endsWith(' | Pavana Projects')) {
        document.title = title;
      } else {
        document.title = `${title} | Pavana Projects`;
      }
    } else if (ROUTE_PAGE_TITLES[cleanPath]) {
      document.title = ROUTE_PAGE_TITLES[cleanPath];
    } else {
      document.title = 'Pavana Projects';
    }

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [location.pathname, title, description]);

  return null;
}

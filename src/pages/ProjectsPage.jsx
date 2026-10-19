import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';





export default function ProjectsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/services', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#14251E] flex items-center justify-center text-[#F8F6ED] p-6 text-center font-mono-tech text-xs">
      Redirecting to Services & Solutions...
    </div>
  );
}

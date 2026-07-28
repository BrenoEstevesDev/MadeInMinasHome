import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LpFuntonExterno from "./pages/LpFuntonExterno.jsx";

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: location.pathname,
    });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <PageViewTracker />

      <Routes>
        <Route path="/" element={<Navigate to="/lpfuntonexterno" replace />} />
        <Route path="/lpfuntonexterno" element={<LpFuntonExterno />} />
        <Route path="*" element={<Navigate to="/lpfuntonexterno" replace />} />
      </Routes>
    </>
  );
}

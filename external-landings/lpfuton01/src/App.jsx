import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LpFuton01 from "./pages/LpFuton01.jsx";

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
        <Route path="/" element={<Navigate to="/lpfuton01" replace />} />
        <Route path="/lpfuton01" element={<LpFuton01 />} />
        <Route path="*" element={<Navigate to="/lpfuton01" replace />} />
      </Routes>
    </>
  );
}

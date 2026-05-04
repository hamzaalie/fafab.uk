
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import HomePage from './pages/HomePage.jsx';
import StaffingPage from './pages/StaffingPage.jsx';
import SecurityPage from './pages/SecurityPage.jsx';
import CleaningPage from './pages/CleaningPage.jsx';
import FacilitiesPage from './pages/FacilitiesPage.jsx';
import TrainingPage from './pages/TrainingPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import TrainingSuccessPage from './pages/TrainingSuccessPage.jsx';
import TrainingCancelPage from './pages/TrainingCancelPage.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/staffing" element={<StaffingPage />} />
          <Route path="/services/security" element={<SecurityPage />} />
          <Route path="/services/cleaning" element={<CleaningPage />} />
          <Route path="/services/facilities" element={<FacilitiesPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/training/success" element={<TrainingSuccessPage />} />
          <Route path="/training/cancel" element={<TrainingCancelPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;

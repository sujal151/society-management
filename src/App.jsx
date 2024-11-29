import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ResidentManagement from './pages/ResidentManagement';
// import FacilityManagement from './pages/FacilityManagement';
import SecurityGuard from './pages/SecurityGuard';
import Announcement from './pages/Announcement';
import Income from './pages/subpages/Income';
import Expense from './pages/subpages/Expense';
import Note from './pages/subpages/Note';
import CreateComplaint from './pages/subpages/CreateComplaint';
import RequestTracking from './pages/subpages/RequestTracking';
import VisitorLogs from './pages/subpages/VisitorLogs';
import SecurityProtocols from './pages/subpages/SecurityProtocols';
import FacilityManagement from './pages/FacilityManagement';
import OtherIncome from './pages/subpages/OtherIncome';
import OtherIncomeViewForm from './components/buttons/OtherIncomeViewForm';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className="flex-1 p-6 bg-gray-100 pt-16 lg:ml-[280px] h-screen overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/resident-management" element={<ResidentManagement />} />
            <Route path="/financial-management/income" element={<Income />} />
            <Route path="/financial-management/expense" element={<Expense />} />
            <Route path="/financial-management/note" element={<Note />} />
            <Route path="/complaint-tracking/createcomplaint" element={<CreateComplaint />} />
            <Route path="/complaint-tracking/requesttracking" element={<RequestTracking />} />
            <Route path="/security-management/visitorlogs" element={<VisitorLogs />} />
            <Route path="/security-management/securityprotocols" element={<SecurityProtocols />} />
            <Route path="/facility-management" element={<FacilityManagement />} />
            <Route path="/security-guard" element={<SecurityGuard />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/financial-management/other-income" element={<OtherIncome />} />
            <Route path="/financial-management/other-income/maintenance-details" element={<OtherIncomeViewForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

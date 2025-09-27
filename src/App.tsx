import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import RoleAccessPage from './pages/auth/RoleAccessPage';
import AlumniDatabasePage from './pages/alumni/AlumniDatabasePage';
import AlumniProfilePage from './pages/alumni/AlumniProfilePage';
import SearchPage from './pages/search/SearchPage';
import FiltersPage from './pages/search/FiltersPage';
import EventsPage from './pages/events/EventsPage';
import EventCreationPage from './pages/events/EventCreationPage';
import DiscussionPage from './pages/community/DiscussionPage';
import MentorshipPage from './pages/community/MentorshipPage';
import LeaderboardPage from './pages/advanced/LeaderboardPage';
import GuestLecturesPage from './pages/advanced/GuestLecturesPage';
import JobBoardPage from './pages/advanced/JobBoardPage';
import DashboardPage from './pages/DashboardPage';
import FundraisingPage from './pages/FundraisingPage';
import AIMatchmakingSection from './pages/AIMatchmakingSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="role-access" element={<RoleAccessPage />} />
          <Route path="alumni-database" element={<AlumniDatabasePage />} />
          <Route path="alumni-profile/:id" element={<AlumniProfilePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="filters" element={<FiltersPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="create-event" element={<EventCreationPage />} />
          <Route path="discussion" element={<DiscussionPage />} />
          <Route path="mentorship" element={<MentorshipPage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="guest-lectures" element={<GuestLecturesPage />} />
          <Route path="job-board" element={<JobBoardPage />} />
          <Route path="fundraising" element={<FundraisingPage />} />
          <Route path="ai-matchmaking" element={<AIMatchmakingSection />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
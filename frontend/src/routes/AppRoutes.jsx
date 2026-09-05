import { Routes, Route, Navigate } from "react-router-dom";

// Main Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import WebsiteDeveloperUSA from "../pages/Services/WebsiteDeveloperUSA";
import Portfolio from "../pages/Portfolio/Portfolio";
import Pricing from "../pages/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

// Admin Pages
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminContacts from "../pages/Admin/AdminContacts";
import AdminReviews from "../pages/Admin/AdminReviews";
import ProtectedRoute from "../components/admin/ProtectedRoute";

// Blog Articles
import Blog1 from "../pages/Blog/Blog1";
import Blog2 from "../pages/Blog/Blog2";
import Blog3 from "../pages/Blog/Blog3";
import Blog4 from "../pages/Blog/Blog4";
import Blog5 from "../pages/Blog/Blog5";
import Blog6 from "../pages/Blog/Blog6";
import Blog7 from "../pages/Blog/Blog7";

// Legal Pages
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "../pages/Terms/Terms";

// 404 Page
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* ==========================================
          MAIN PAGES
      ========================================== */}

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/services/website-developer-usa"element={<WebsiteDeveloperUSA />}/>

      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/pricing" element={<Pricing />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/contact" element={<Contact />} />


      {/* ==========================================
          ADMIN LOGIN
      ========================================== */}

      <Route
  path="/admin"
  element={<Navigate to="/admin/login" replace />}
/>

<Route
  path="/admin/login"
  element={<AdminLogin />}
/>


      {/* ==========================================
          PROTECTED ADMIN ROUTES
      ========================================== */}

      <Route element={<ProtectedRoute />}>
  <Route
    path="/admin/dashboard"
    element={<AdminDashboard />}
  />

  <Route
    path="/admin/contacts"
    element={<AdminContacts />}
  />

  <Route
    path="/admin/reviews"
    element={<AdminReviews />}
  />
</Route>


      {/* ==========================================
          BLOG ARTICLES
      ========================================== */}

      <Route path="/blog/1" element={<Blog1 />} />

      <Route path="/blog/2" element={<Blog2 />} />

      <Route path="/blog/3" element={<Blog3 />} />

      <Route path="/blog/4" element={<Blog4 />} />

      <Route path="/blog/5" element={<Blog5 />} />

      <Route path="/blog/6" element={<Blog6 />} />

      <Route path="/blog/how-much-does-a-business-website-cost-in-the-usa"element={<Blog7 />}/>


      {/* ==========================================
          LEGAL PAGES
      ========================================== */}

      <Route
        path="/privacy"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/terms"
        element={<Terms />}
      />


      {/* ==========================================
          404 — PAGE NOT FOUND
          Keep this route LAST
      ========================================== */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;
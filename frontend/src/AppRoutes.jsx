import HealthPackages from "./Pages/HealthPackages/HealthPackagesPage";
import NewPackage from "./Pages/HealthPackages/NewPackagePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UpdatePackage from "./Pages/HealthPackages/UpdatePackage";

export default function Paths() {
  return (
    <Router>
      <Routes>
        <Route path="/health-packages" element={<HealthPackages />} />
        <Route path="/new-package" element={<NewPackage />} />
        <Route path="/update-package/:id" element={<UpdatePackage />} /> {/* New route for updating a package */}
      </Routes>
    </Router>
  );
}

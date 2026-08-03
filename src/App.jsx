import { Routes, Route } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Messages from "./components/Messages/Messages";
import ProductAnalytics from "./components/ProductAnalytics/ProductAnalytics";
import Analytics from "./components/Analytics/Analytics";
import Invoice from "./components/Invoice/Invoice";
import Schedule from "./components/Schedule/Schedule";
import Calendar from "./components/Calendar/Calendar";
import CreateInvoice from "./components/CreateInvoice/CreateInvoice";
import ScheduleList from "./components/Schedule/ScheduleList";
import TaskPreview from "./components/TaskPreview/TaskPreview";
import Settings from "./components/Settings/Settings";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
    return (
        <Routes>

            {/* Public */}

            <Route
                path="/signup"
                element={<Signup />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            {/* Protected */}

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/messages"
                element={
                    <ProtectedRoute>
                        <Messages />
                    </ProtectedRoute>
                }
            />
            <Route
    path="/analytics"
    element={
        <ProtectedRoute>
            <Analytics />
        </ProtectedRoute>
    }
/>

<Route
    path="/invoice"
    element={
        <ProtectedRoute>
            <Invoice />
        </ProtectedRoute>
    }
/>
<Route
    path="/settings"
    element={
        <ProtectedRoute>
            <Settings />
        </ProtectedRoute>
    }
/>
<Route
    path="/schedule"
    element={
        <ProtectedRoute>
            <Schedule />
        </ProtectedRoute>
    }
/>

<Route
    path="/calendar"
    element={
        <ProtectedRoute>
            <Calendar />
        </ProtectedRoute>
    }
/>
<Route
    path="/task-preview"
    element={
        <ProtectedRoute>
            <TaskPreview />
        </ProtectedRoute>
    }
/>
<Route
    path="/create-invoice"
    element={
        <ProtectedRoute>
            <CreateInvoice />
        </ProtectedRoute>
    }
/>

<Route
    path="/schedule-list"
    element={
        <ProtectedRoute>
            <ScheduleList />
        </ProtectedRoute>
    }
/>
            <Route
                path="/product-analytics"
                element={
                    <ProtectedRoute>
                        <ProductAnalytics />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default App;
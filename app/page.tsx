"use client";

import { useState, useEffect } from "react";
import StatCard from "../components/statCard";
import WelcomeMessage from "../components/WelcomeMessage";
import CameraList from "../components/CameraList";
import { Camera } from "../types/camera";
import CrowdControls from "../components/CrowdControls";
import HighCrowdCameras from "../components/HighCrowdCameras";
import DashboardPanel from "../components/DashboardPanel";
import CameraMonitoring from "../components/CameraMonitoring";

export default function Home() {

  const [peopleCount, setPeopleCount] = useState(250);

 useEffect(() => {
  console.log("People count changed:", peopleCount);
}, [peopleCount]);

  const cameraCount = 12;

  function decreasePeople() {
  setPeopleCount(peopleCount - 1);
}

function increasePeople() {
  setPeopleCount(peopleCount + 1);
}

  // Array of objects
  const cameras: Camera[] = [
    {
      id: "CAM-01",
      location: "Main Gate",
      peopleCount: 147,
      status: "LIVE",
      resolution: "1080p",
    },
    {
      id: "CAM-02",
      location: "Parking",
      peopleCount: 83,
    },
    {
      id: "CAM-03",
      location: "Food Court",
      peopleCount: 201,
    },
    {
  id: "CAM-04",
  location: "Parking Exit",
  peopleCount: 119,
},
  ];

  // Filter high-crowd cameras
  const highCrowdCameras = cameras.filter(
    (camera) => camera.peopleCount > 100
  );

  // Density calculation
  let density = "NORMAL";

  if (peopleCount > 200) {
    density = "CRITICAL";
  } else if (peopleCount > 100) {
    density = "HIGH";
  }

  // Function
  function getDensityMessage(): string {
    if (peopleCount > 200) {
      return "Danger! Crowd is extremely high.";
    } else if (peopleCount > 100) {
      return "Warning! Crowd density is high.";
    } else {
      return "Crowd density is normal.";
    }
  }

  return (
    <main className="dashboard">
      <WelcomeMessage />
      <p>{getDensityMessage()}</p>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "cyan" }}>NEXUS 3D</h1>

        <nav
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div>Dashboard</div>
          <div>Digital Twin</div>
          <div>Analytics</div>
          <div>AI Assistant</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section>
        <h2
          style={{
            marginTop: "50px",
            padding: "20px",
            border: "2px solid cyan",
          }}
        >
          AI POWERED DIGITAL TWIN
        </h2>

        <p>
          NEXUS 3D combines computer vision, artificial intelligence,
          real-time analytics and 3D visualization.
        </p>

        <button
          onClick={() => alert("Welcome to NEXUS 3D!")}
        >
          Enter NEXUS
        </button>
      </section>

      {/* Statistics */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div className="stats-grid">
        <StatCard title="People" value={peopleCount} unit="persons" />
        <StatCard title="Density" value={density} />
        <StatCard title="Cameras" value={cameraCount} unit="active" />
        </div>

        <div className="content-grid">

  <DashboardPanel title="Crowd Overview">
    <p>Real-time crowd monitoring will appear here.</p>
  </DashboardPanel>

  <DashboardPanel title="Alerts">
    <p>No active alerts.</p>
  </DashboardPanel>

</div>
<CameraMonitoring cameras={cameras} />

        {/* People Card */}
       <CrowdControls
  peopleCount={peopleCount}
  onIncrease={increasePeople}
  onDecrease={decreasePeople}
/>

      </section>

      <HighCrowdCameras cameras={highCrowdCameras} />

      {/* All Cameras */}
      <CameraList cameras={cameras} />
    </main>
  );
}
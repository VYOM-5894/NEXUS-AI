import { Camera } from "../types/camera";

type CameraMonitoringProps = {
  cameras: Camera[];
};

export default function CameraMonitoring({
  cameras,
}: CameraMonitoringProps) {
  return (
    <section className="camera-monitoring">
      <h2>Camera Monitoring</h2>

      <div className="camera-grid">
        {cameras.map((camera) => (
          <div className="camera-card" key={camera.id}>
            <div className="camera-placeholder">
              📹
            </div>

            <h3>{camera.id}</h3>

            <p>{camera.location}</p>

            <p>
              People detected: {camera.peopleCount}
            </p>

            <p>
              Status: {camera.status ?? "UNKNOWN"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
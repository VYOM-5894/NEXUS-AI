import { Camera } from "../types/camera";

type HighCrowdCamerasProps = {
  cameras: Camera[];
};

export default function HighCrowdCameras({
  cameras,
}: HighCrowdCamerasProps) {
  return (
    <section style={{ padding: "20px" }} >
      <h2>High Crowd Cameras</h2>

      <p>
        Number of high-crowd cameras: {cameras.length}
      </p>

      {cameras.map((camera) => (
        <p key={camera.id}>
          {camera.id} - {camera.location} -{" "}
          {camera.peopleCount} people
        </p>
      ))}
    </section>
  );
}
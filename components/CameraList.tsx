import { Camera } from "../types/camera";

type CameraListProps = {
  cameras: Camera[];
};

export default function CameraList({
  cameras,
}: CameraListProps) {
  return (
    <section style={{ padding: "20px" }}>
      <h2>All Cameras</h2>

      {cameras.map((camera) => (
        <p key={camera.id}>
          {camera.id} - {camera.location} - {camera.peopleCount} people
        </p>
      ))}
    </section>
  );
}
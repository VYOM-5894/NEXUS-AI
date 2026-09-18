"use client";

type CrowdControlsProps = {
  peopleCount: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function CrowdControls({
  peopleCount,
  onIncrease,
  onDecrease,
}: CrowdControlsProps) {
  return (
    <section>
      <h2>Crowd Controls</h2>

      <p>Current People: {peopleCount}</p>

      <button onClick={onIncrease}>
        Simulate Person Entry
      </button>

      <button onClick={onDecrease}>
        Simulate Person Exit
      </button>
    </section>
  );
}
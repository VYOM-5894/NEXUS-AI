export type Camera = {
  id: string;
  location: string;
  peopleCount: number;
  status?: "LIVE" | "OFFLINE" | "ERROR";
  resolution?: string;
};
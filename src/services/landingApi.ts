import type { LandingData } from "@/types/landing";

const API_URL = "https://serv.nestak.ir/api/v1/landing";

export async function fetchLandingData(): Promise<LandingData | null> {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Failed to fetch landing data:", response.statusText);
      return null;
    }

    const data: LandingData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching landing data:", error);
    return null;
  }
}

import type { LandingData } from "@/types/landing";

const API_URL = "https://serv.nestak.ir/api/v1/landing";

export async function fetchLandingData(): Promise<LandingData | null> {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 0 }, // Cache Disable
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

export interface ContactFormData {
  name: string;
  email: string; // Empty string to match API structure
  phone: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return {
        success: false,
        message: "خطا در ارسال پیام. لطفاً دوباره تلاش کنید.",
      };
    }

    return {
      success: true,
      message: "پیام شما با موفقیت ارسال شد.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "خطا در ارسال پیام. لطفاً دوباره تلاش کنید.",
    };
  }
}

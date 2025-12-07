import { PixelType } from "@/app/lib/definitions";
import { createClient } from "@/app/lib/supabase/server";
import { unstable_noStore as noStore } from "next/cache";

/**
 * Fetches pixels from the database
 * @returns {Promise<PixelType[]>} Promise<PixelType[]> - Array of pixels
 */
export async function fetchPixels(): Promise<PixelType[]> {
  noStore();
  const supabase = await createClient();

  try {
    const { data: pixels, error } = await supabase
      .from("pixel")
      .select("id, x_position, y_position, color");

    if (error) {
      console.error("Error fetching pixels:", error);
      return [];
    }

    return (
      pixels?.map((pixel) => ({
        id: pixel.id,
        x: pixel.x_position,
        y: pixel.y_position,
        color: pixel.color,
      })) || []
    );
  } catch (error) {
    console.error("Error fetching pixels:", error);
    return [];
  }
}

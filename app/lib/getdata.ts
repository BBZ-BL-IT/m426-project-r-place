import { createClient } from "@/app/lib/supabase/server";
import { PixelType } from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

const supabase = createClient();

export async function fetchPixels(): Promise<PixelType[]> {
  noStore();
  try {
    const { data: pixels, error } = await supabase
      .from("pixel")
      .select("id, x_position, y_position, color");

    if (error) {
      console.error("Error fetching pixels:", error);
      return [];
    }

    const mappedPixels: PixelType[] =
      pixels?.map((pixel) => ({
        id: pixel.id,
        x: pixel.x_position,
        y: pixel.y_position,
        color: pixel.color,
      })) || [];

    return mappedPixels;
  } catch (error) {
    console.error("Error fetching pixels:", error);
    return [];
  }
}

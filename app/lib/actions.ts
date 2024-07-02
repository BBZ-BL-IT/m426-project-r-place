import { createClient } from "@/app/lib/supabase/client";

/**
 * Save pixels to the database or delete a single pixel
 * @param x The x position of the pixel
 * @param y The y position of the pixel
 * @param color The color of the pixel or "deleteSingle" to delete the pixel
 * @returns {Promise<void>} Promise<void> - Promise that resolves when the pixel is saved
 */
export async function savePixelsToDb(
  x: number,
  y: number,
  color: string,
): Promise<void> {
  const supabase = createClient();

  try {
    const isNotNull = await supabase
      .from("pixel")
      .select("*", { count: "exact" })
      .eq("x_position", x)
      .eq("y_position", y);

    if (color === "deleteSingle") {
      await supabase
        .from("pixel")
        .delete()
        .eq("x_position", x)
        .eq("y_position", y);
    } else if (isNotNull.count != 0) {
      await supabase
        .from("pixel")
        .update({
          x_position: x,
          y_position: y,
          color,
          last_modified_at: new Date(),
        })
        .eq("x_position", x)
        .eq("y_position", y);
    } else {
      await supabase
        .from("pixel")
        .insert([{ x_position: x, y_position: y, color }]);
    }
  } catch (error) {
    console.error("Error saving pixels:", error);
  }
}

/**
 * Delete the canvas
 * @returns {Promise<void>} Promise<void> - Promise that resolves when the canvas is deleted
 */
export async function deleteCanvas() {
  const supabase = createClient();

  try {
    await supabase.from("pixel").delete().neq("color", "thisPixelDoesNotExist");
  } catch (error) {
    console.error("Error deleting canvas");
  }
}

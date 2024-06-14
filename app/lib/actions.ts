import { createClient } from "@/app/lib/supabase/client";

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

    if (color === "#ffffff") {
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
  console.log("Pixels saved successfully at", x, y, "with color", color);
}

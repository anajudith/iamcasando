import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl) {
  throw new Error("Supabase URL not found in environment variables");
}

if (!supabaseKey) {
  throw new Error("Supabase key not found in environment variables");
}

export const supabaseApi = createClient(supabaseUrl, supabaseKey);

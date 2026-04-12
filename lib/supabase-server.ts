import { createClient as createSupabaseCLient } from '@supabase/supabase-js'

//Uses service role - full DB access, server only, never expose to the browser
export function createClient() {
    return createSupabaseCLient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
}
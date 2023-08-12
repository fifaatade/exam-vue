import {SUPABASE_URL, SUPABASE_KEY,} from '../../file'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
)
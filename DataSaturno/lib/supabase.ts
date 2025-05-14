import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xxhwazbvstmqjmhmsjug.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4aHdhemJ2c3RtcWptaG1zanVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzE1MDksImV4cCI6MjA2MjgwNzUwOX0.TpfXd0o9-3py2dvKYcL9j_sbvzU8B40ACI9Jaa5HIo4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

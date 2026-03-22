import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder-key'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export async function getPlatforms() {
  const { data, error } = await supabase
    .from('platforms')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getPlatformBySlug(slug: string) {
  const { data, error } = await supabase
    .from('platforms')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data
}

export async function getCaseStudies() {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getCaseStudyBySlug(slug: string) {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data
}

export async function submitContact(data: {
  name: string
  email: string
  company: string
  description: string
}) {
  const { data: result, error } = await supabase
    .from('contacts')
    .insert({ name: data.name, email: data.email, company: data.company, description: data.description, status: 'new' as const })
    .select()

  if (error) throw error
  return result
}

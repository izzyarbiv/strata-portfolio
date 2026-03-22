export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      platforms: {
        Row: {
          id: string
          created_at: string
          name: string
          slug: string
          description: string
          overview: string
          features: string[]
          technology: string[]
          image_url: string | null
          screenshots: string[] | null
          color: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          slug: string
          description: string
          overview: string
          features: string[]
          technology: string[]
          image_url?: string | null
          screenshots?: string[] | null
          color: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          slug?: string
          description?: string
          overview?: string
          features?: string[]
          technology?: string[]
          image_url?: string | null
          screenshots?: string[] | null
          color?: string
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          id: string
          created_at: string
          title: string
          slug: string
          platform_id: string
          problem: string
          solution: string
          outcome: string[]
          image_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          slug: string
          platform_id: string
          problem: string
          solution: string
          outcome: string[]
          image_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          slug?: string
          platform_id?: string
          problem?: string
          solution?: string
          outcome?: string[]
          image_url?: string | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          company: string
          description: string
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          company: string
          description: string
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          company?: string
          description?: string
          status?: string
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

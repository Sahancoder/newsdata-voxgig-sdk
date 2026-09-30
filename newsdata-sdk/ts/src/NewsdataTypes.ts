// Typed models for the Newsdata SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Archive {
  ai_org?: any
  ai_region?: any
  ai_summary?: string | null
  ai_tag?: any
  article_id: string
  category?: any[] | null
  content?: string | null
  country?: any[] | null
  creator?: any[] | null
  datatype?: string
  description?: string | null
  duplicate?: boolean
  fetched_at?: string | null
  image_url?: string | null
  keywords?: any[] | null
  language?: string | null
  link?: string | null
  pubDate?: string | null
  pubDateTZ?: string
  sentiment?: any
  sentiment_stats?: any
  source_icon?: string | null
  source_id?: string | null
  source_name?: string | null
  source_priority?: number | null
  source_url?: string | null
  title?: string | null
  video_url?: string | null
}

export interface ArchiveListMatch {
  apikey?: string
  category?: any[]
  country?: any[]
  creator?: any[]
  datatype?: any[]
  domain?: any[]
  domainurl?: any[]
  excludecategory?: any[]
  excludecountry?: any[]
  excludedomain?: any[]
  excludefield?: any[]
  excludelanguage?: any[]
  from_date?: string
  full_content?: string
  id?: any[]
  image?: string
  language?: any[]
  organization?: any[]
  page?: string
  prioritydomain?: string
  q?: string
  q_in_meta?: string
  q_in_title?: string
  region?: any[]
  removeduplicate?: string
  sentiment?: string
  sentiment_score?: number
  size?: number
  sort?: string
  tag?: any[]
  timezone?: string
  to_date?: string
  url?: string
  video?: string
}

export interface Count {
  results?: Record<string, any>
  status?: string
}

export interface CountLoadMatch {
  apikey?: string
  category?: any[]
  country?: any[]
  creator?: any[]
  datatype?: any[]
  domain?: any[]
  domainurl?: any[]
  excludecategory?: any[]
  excludecountry?: any[]
  excludedomain?: any[]
  excludelanguage?: any[]
  from_date: string
  full_content?: string
  image?: string
  interval?: string
  language?: any[]
  organization?: any[]
  page?: string
  prioritydomain?: string
  q?: string
  q_in_meta?: string
  q_in_title?: string
  region?: any[]
  removeduplicate?: string
  sentiment?: string
  sentiment_score?: number
  size?: number
  sort?: string
  tag?: any[]
  to_date: string
  video?: string
  market_id?: any[]
  coin?: any[]
}

export interface Crypto {
  ai_tag?: any
  article_id: string
  coin?: any[] | null
  content?: string | null
  creator?: any[] | null
  description?: string | null
  duplicate?: boolean
  fetched_at?: string | null
  image_url?: string | null
  keywords?: any[] | null
  language?: string | null
  link?: string | null
  pubDate?: string | null
  pubDateTZ?: string
  sentiment?: any
  sentiment_stats?: any
  source_icon?: string | null
  source_id?: string | null
  source_name?: string | null
  source_priority?: number | null
  source_url?: string | null
  title?: string | null
  video_url?: string | null
}

export interface CryptoListMatch {
  apikey?: string
  coin?: any[]
  domain?: any[]
  domainurl?: any[]
  excludedomain?: any[]
  excludefield?: any[]
  excludelanguage?: any[]
  from_date?: string
  full_content?: string
  id?: any[]
  image?: string
  language?: any[]
  page?: string
  prioritydomain?: string
  q?: string
  q_in_meta?: string
  q_in_title?: string
  removeduplicate?: string
  sentiment?: string
  size?: number
  sort?: string
  tag?: any[]
  timeframe?: string
  timezone?: string
  to_date?: string
  url?: string
  video?: string
}

export interface Latest {
  ai_org?: any
  ai_region?: any
  ai_summary?: string | null
  ai_tag?: any
  article_id: string
  category?: any[] | null
  content?: string | null
  country?: any[] | null
  creator?: any[] | null
  datatype?: string
  description?: string | null
  duplicate?: boolean
  fetched_at?: string | null
  image_url?: string | null
  keywords?: any[] | null
  language?: string | null
  link?: string | null
  pubDate?: string | null
  pubDateTZ?: string
  sentiment?: any
  sentiment_stats?: any
  source_icon?: string | null
  source_id?: string | null
  source_name?: string | null
  source_priority?: number | null
  source_url?: string | null
  title?: string | null
  video_url?: string | null
}

export interface LatestListMatch {
  apikey?: string
  category?: any[]
  country?: any[]
  creator?: any[]
  datatype?: any[]
  domain?: any[]
  domainurl?: any[]
  excludecategory?: any[]
  excludecountry?: any[]
  excludedomain?: any[]
  excludefield?: any[]
  excludelanguage?: any[]
  full_content?: string
  id?: any[]
  image?: string
  language?: any[]
  organization?: any[]
  page?: string
  prioritydomain?: string
  q?: string
  q_in_meta?: string
  q_in_title?: string
  region?: any[]
  removeduplicate?: string
  sentiment?: string
  sentiment_score?: number
  size?: number
  sort?: string
  tag?: any[]
  timeframe?: string
  timezone?: string
  url?: string
  video?: string
}

export interface Market {
  ai_org?: any
  ai_summary?: string | null
  ai_tag?: any
  article_id: string
  content?: string | null
  country?: any[] | null
  creator?: any[] | null
  datatype?: string
  description?: string | null
  duplicate?: boolean
  fetched_at?: string | null
  image_url?: string | null
  keywords?: any[] | null
  language?: string | null
  link?: string | null
  market_id?: any[] | null
  pubDate?: string | null
  pubDateTZ?: string
  sentiment?: any
  sentiment_stats?: any
  source_icon?: string | null
  source_id?: string | null
  source_name?: string | null
  source_priority?: number | null
  source_url?: string | null
  symbol?: any[] | null
  title?: string | null
  video_url?: string | null
}

export interface MarketListMatch {
  apikey?: string
  country?: any[]
  creator?: any[]
  datatype?: any[]
  domain?: any[]
  domainurl?: any[]
  excludecountry?: any[]
  excludedomain?: any[]
  excludefield?: any[]
  excludelanguage?: any[]
  from_date?: string
  full_content?: string
  id?: any[]
  image?: string
  language?: any[]
  market_id?: any[]
  organization?: any[]
  page?: string
  prioritydomain?: string
  q?: string
  q_in_meta?: string
  q_in_title?: string
  removeduplicate?: string
  sentiment?: string
  sentiment_score?: number
  size?: number
  sort?: string
  tag?: any[]
  timeframe?: string
  timezone?: string
  to_date?: string
  url?: string
  video?: string
}

export interface New {
  ai_org?: any
  ai_region?: any
  ai_summary?: string | null
  ai_tag?: any
  article_id: string
  category?: any[] | null
  content?: string | null
  country?: any[] | null
  creator?: any[] | null
  datatype?: string
  description?: string | null
  duplicate?: boolean
  fetched_at?: string | null
  image_url?: string | null
  keywords?: any[] | null
  language?: string | null
  link?: string | null
  pubDate?: string | null
  pubDateTZ?: string
  sentiment?: any
  sentiment_stats?: any
  source_icon?: string | null
  source_id?: string | null
  source_name?: string | null
  source_priority?: number | null
  source_url?: string | null
  title?: string | null
  video_url?: string | null
}

export interface NewListMatch {
  apikey?: string
  category?: any[]
  country?: any[]
  creator?: any[]
  datatype?: any[]
  domain?: any[]
  domainurl?: any[]
  excludecategory?: any[]
  excludecountry?: any[]
  excludedomain?: any[]
  excludefield?: any[]
  excludelanguage?: any[]
  full_content?: string
  id?: any[]
  image?: string
  language?: any[]
  organization?: any[]
  page?: string
  prioritydomain?: string
  q?: string
  q_in_meta?: string
  q_in_title?: string
  region?: any[]
  removeduplicate?: string
  sentiment?: string
  sentiment_score?: number
  size?: number
  sort?: string
  tag?: any[]
  timeframe?: string
  timezone?: string
  url?: string
  video?: string
}

export interface Source {
  category?: any[] | null
  country?: any[] | null
  description?: string | null
  icon?: string | null
  id: string
  language?: any[] | null
  last_fetch?: string | null
  name?: string | null
  priority?: number | null
  total_article?: number | null
  url?: string | null
}

export interface SourceListMatch {
  apikey?: string
  category?: any[]
  country?: any[]
  domainurl?: any[]
  language?: any[]
  prioritydomain?: string
}

export interface Websocket {
}

export interface WebsocketLoadMatch {
  apikey: string
  registration_id: string
}

export interface WebsocketDeleteEnvelope {
}

export interface WebsocketDeleteEnvelopeRemoveMatch {
  apikey: string
  registration_id: string
}

export interface WebsocketQueryListEnvelope {
  results: Record<string, any>
  status: string
  totalQueries: number
}

export interface WebsocketQueryListEnvelopeLoadMatch {
  apikey: string
}

export interface WebsocketRegisterEnvelope {
  message: string
  registration_id: string
}

export interface WebsocketRegisterEnvelopeCreateData {
  apikey?: string
  category?: any[]
  country?: any[]
  creator?: any[]
  datatype?: any[]
  domain?: any[]
  domainurl?: any[]
  excludecategory?: any[]
  excludecountry?: any[]
  excludedomain?: any[]
  excludefield?: any[]
  excludelanguage?: any[]
  full_content?: string
  image?: string
  language?: any[]
  organization?: any[]
  prioritydomain?: string
  q?: string
  q_in_meta?: string
  q_in_title?: string
  region?: any[]
  removeduplicate?: string
  sentiment?: string
  sentiment_score?: number
  tag?: any[]
  timezone?: string
  video?: string
  message: string
  registration_id: string
}


export interface Response {
  data: Data[]
  pagination: Pagination
  meta: Meta
}

export interface Data {
  type: Type
  id: string
  slug: string
  url: string
  bitly_gif_url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  rating: Rating
  content_url: string
  source_tld: string
  source_post_url: string
  is_sticker: number
  import_datetime: string
  trending_datetime: string
  images: Images
  title: string
  analytics: Analytics
  user?: User
}

export interface Analytics {
  onload: Onclick
  onclick: Onclick
  onsent: Onclick
}

export interface Onclick {
  url: string
}

export interface Images {
  fixed_height_still: The480_WStill
  original_still: The480_WStill
  fixed_width: { [key: string]: string }
  fixed_height_small_still: The480_WStill
  fixed_height_downsampled: { [key: string]: string }
  preview: DownsizedSmall
  fixed_height_small: { [key: string]: string }
  downsized_still: The480_WStill
  downsized: The480_WStill
  downsized_large: The480_WStill
  fixed_width_small_still: The480_WStill
  preview_webp: The480_WStill
  fixed_width_still: The480_WStill
  fixed_width_small: { [key: string]: string }
  downsized_small: DownsizedSmall
  fixed_width_downsampled: { [key: string]: string }
  downsized_medium: The480_WStill
  original: { [key: string]: string }
  fixed_height: { [key: string]: string }
  looping: { [key: string]: string }
  original_mp4: DownsizedSmall
  preview_gif: The480_WStill
  '480w_still': The480_WStill
}

export interface The480_WStill {
  url: string
  width: string
  height: string
  size?: string
}

export interface DownsizedSmall {
  width: string
  height: string
  mp4: string
  mp4_size: string
}

export enum Rating {
  G = 'g',
  PG = 'pg',
}

export enum Type {
  GIF = 'gif',
}

export interface User {
  avatar_url: string
  banner_url: string
  banner_image?: string
  profile_url: string
  username: string
  display_name: string
  is_verified: boolean
}

export interface Meta {
  status: number
  msg: string
  response_id: string
}

export interface Pagination {
  total_count: number
  count: number
  offset: number
}

import apiError from './baseError';
import petitio from 'petitio';

import * as animeEndpoints from './endpoints/anime';
import * as waifuEndpoints from './endpoints/waifu';
import * as brainlyEndpoints from './endpoints/brainly/search';

export const anime = animeEndpoints;
export const brainly = brainlyEndpoints;
export const waifu = waifuEndpoints; 
export async function coin(): Promise<cointResult> {
    try {
        return await petitio('https://kagchi-api.glitch.me/coin').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}
export async function user(): Promise<user> {
    try {
        return await petitio('https://kagchi-api.glitch.me/users').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}
export async function memeindo(): Promise<subredditResult> {
    try {
        return await petitio('https://kagchi-api.glitch.me/meme/indonesia').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function memes(): Promise<subredditResult> {
    try {
        return await petitio('https://kagchi-api.glitch.me/meme/memes').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function dankmemes(): Promise<subredditResult> {
    try {
        return await petitio('https://kagchi-api.glitch.me/meme/dankmemes').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function coronamemes(): Promise<subredditResult> {
    try {
        return await petitio('https://kagchi-api.glitch.me/meme/coronamemes').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function subreddit(query: string): Promise<subredditResult> {
    if(!query) throw new apiError('Input query to search.');
    try {
        return await petitio('https://kagchi-api.glitch.me/subreddit/' + query).json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

interface user {
    users: userArray[]
}
interface subredditResult {
    id: number,
    hash: string,
    author: string,
    account_id: number | null,
    account_url: string | null,
    title: string,
    score: number,
    size: number,
    views: number,
    is_album: boolean,
    album_cover: string | null,
    album_cover_width: number,
    album_cover_height: string,
    mimetype: string,
    ext: string,
    width: number,
    height: number,
    animated: boolean,
    looping: boolean,
    reddit: string,
    subreddit: string,
    description: string,
    create_datetime: string,
    bandwidth: string,
    timestamp: string,
    section: string,
    nsfw: false,
    prefer_video: boolean,
    video_source: unknown | null,
    video_host: unknown | null,
    num_images: number,
    in_gallery: boolean,
    favorited: boolean,
    adConfig: {
        safeFlags: string[]
    },
    highRiskFlags: unknown[],
    unsafeFlags: unknown[],
    wallUnsafeFlags: unknown[],
    showsAds: boolean
}                    

interface userArray {
    name: string,
    surname: string,
    address: string,
    phone: string,
    email: string,
    city: string,
    number: string,
    id: string
}
interface cointResult {
    coin_image: string,
    coin: string
}
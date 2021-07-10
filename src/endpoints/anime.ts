import petitio from 'petitio';
import apiError from '../baseError';
import { jikanNoResults, jikanResults } from '../interfaces/jikanResponse';
import { nekosResult } from '../interfaces/nekosLifeResponse';
const nekosLifeBaseURI = 'https://nekos.life/api/v2/img';

export async function baka(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/baka').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function pat(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/pat').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function feed(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/feed').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function trap(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/feed').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function poke(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/poke').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function kiss(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/kiss').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function cuddle(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/cuddle').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function hug(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/hug').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function slap(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/slap').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function smug(): Promise<nekosResult> {
    try {
        return await petitio(nekosLifeBaseURI + '/smug').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function search(name: string): Promise<jikanResults | jikanNoResults> {
    try {
        return await petitio('https://api.jikan.moe/v3/search/anime').query('q', name).json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}
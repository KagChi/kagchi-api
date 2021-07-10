import axios from 'axios';
import apiError from '../baseError';
import { jikanNoResults, jikanResults } from '../interfaces/jikanResponse';
import { nekosResult } from '../interfaces/nekosLifeResponse';
const nekosLifeBaseURI = 'https://nekos.life/api/v2/img';

export async function baka(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/baka').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function pat(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/pat').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function feed(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/feed').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function trap(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/feed').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function poke(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/poke').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function kiss(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/kiss').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function cuddle(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/cuddle').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function hug(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/hug').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function slap(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/slap').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function smug(): Promise<nekosResult> {
    try {
        return await axios.get(nekosLifeBaseURI + '/smug').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function search(name: string): Promise<jikanResults | jikanNoResults> {
    try {
        return await axios.get('https://api.jikan.moe/v3/search/anime?q=' + name).then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}
import petitio from 'petitio';
import apiError from '../baseError';
export async function nezuko(): Promise<Result> {
    try {
        return await petitio('https://kagchi-api.glitch.me/waifu/nezuko').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function mai() {
    try {
        return await petitio('https://kagchi.my.id/api/mai').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function takagi() {
    try {
        return await petitio('https://kagchi.my.id/api/takagi').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function random(): Promise<Result> {
    try {
        return await petitio('https://nekos.life/api/v2/img/waifu').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function megumin(): Promise<Result> {
    try {
        return await petitio('https://kagchi-api.glitch.me/waifu/megumin').json()
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

interface Result {
    url: string;
}
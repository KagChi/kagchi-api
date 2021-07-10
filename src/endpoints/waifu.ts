import axios from 'axios';
import apiError from '../baseError';
export async function nezuko(): Promise<Result> {
    try {
        return await axios.get('https://kagchi-api.glitch.me/waifu/nezuko').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function mai(): Promise<Result> {
    try {
        return await axios.get('https://kagchi.my.id/api/mai').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function takagi(): Promise<Result> {
    try {
        return await axios.get('https://kagchi.my.id/api/takagi').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function random(): Promise<Result> {
    try {
        return await axios.get('https://nekos.life/api/v2/img/waifu').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function megumin(): Promise<Result> {
    try {
        return await axios.get('https://kagchi-api.glitch.me/waifu/megumin').then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

interface Result {
    url: string;
}

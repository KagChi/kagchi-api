import apiError from "../../baseError";
import axios from 'axios';

export async function id(query: string): Promise<brainlyResult[]> {
    if(!query) throw new apiError('Input query to search.')
    try {
        return await axios.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/id/' + query).then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function pl(query: string): Promise<brainlyResult[]> {
    if(!query) throw new apiError('Input query to search.')
    try {
        return await axios.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/pl/' + query).then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function pt(query: string): Promise<brainlyResult[]> {
    if(!query) throw new apiError('Input query to search.')
    try {
        return await axios.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/pt/' + query).then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export async function us(query: string): Promise<brainlyResult[]> {
    if(!query) throw new apiError('Input query to search.')
    try {
        return await axios.get('https://famouscomplicatedoutsourcing.darkforestbeep.repl.co/us/' + query).then(x => x.data)
    } catch(e) {
        throw new apiError(`An error occured when fetching: ` + e)
    }
}

export const info = { id: "indonesia", pt: "portuguese", pl: "poland", us: "united states" }

interface brainlyResult {
    node: {
        databaseId: number,
        content: string,
        created: string,
        lastActivity: string,
        attachments: brainlyAttachment[],
        author: brainlyAuthor,
        isAuthorsFirstQuestion: boolean,
        canBeAnswered: boolean,
        pointsForAnswer: number,
        pointsForBestAnswer: number,
        answers: brainlyAnswer[]
    }
}

interface brainlyAnswer {
    databaseId: number,
    content: string,
    points: number,
    isBest: boolean,
    created: string,
    rating: number,
    ratesCount: number,
    thanksCount: number,
    attachments: brainlyAttachment[],
    author: brainlyAuthor
}

interface brainlyAuthor {
    databaseId: number,
    nick: string,
    points: number,
    gender: string,
    description: string,
    isDeleted: string,
    avatar: {
        url: string
    },
    category: number,
    clientType: string,
    rank: {
        databaseId: number,
        name: string
    },
    receivedThanks: number,
    bestAnswersCount: number,
    helpedUsersCount: number
}

interface brainlyAttachment {
    url: string
}
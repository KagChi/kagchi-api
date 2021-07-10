export * from './endpoints/anime';
export * from './endpoints/waifu';
import { us, pl, pt, id } from './endpoints/brainly/search';
export declare const brainly: {
    us: typeof us;
    pl: typeof pl;
    pt: typeof pt;
    id: typeof id;
    info: {
        id: string;
        pt: string;
        pl: string;
        us: string;
    };
};

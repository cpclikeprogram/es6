import { Chapter } from "../../menu/Type";
import { get } from "./request"

export function getHitokoto(): any {
    return get('/api2',{});
}

export function getChapter(): Promise<Chapter[]> {
    return get("/json/chapter.json",{}) as unknown as Promise<Chapter[]>;
}

export default {
    getHitokoto,
    getChapter
}



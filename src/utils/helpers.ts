import { Ref } from "vue";
import { DateTime } from "luxon";

export const toPartialRefs = <T extends object, K extends keyof T>(obj: T, keys: K[]): { [K in keyof T]: Ref } => {
    return keys.reduce((acc, key) => {
        acc[key] = ref(obj[key])
        return acc
    }
        , {} as { [K in keyof T]: Ref })

}

export const toRelativeCalendar = (isoDate: string) => {
    return DateTime.fromISO(isoDate).toRelativeCalendar()
}


//keys.map(key =>({key:toRef(obj, key)}))
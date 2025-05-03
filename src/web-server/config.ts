import config from "config";

const Config = {
    get(key: string): any {
        try {
            return config.get(key);
        } catch (e) {
            return undefined;
        }
    },
}

export { Config }
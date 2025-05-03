const once = <T>(cb: () => T): (() => T) => {
    let t: undefined | T;

    return () => {
        if (!t) t = cb();

        return t;
    };
};

export { once };

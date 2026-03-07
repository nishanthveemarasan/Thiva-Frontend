export const required = (str: string | null = null): boolean => {
    return str ? str.trim().length > 0 : false;
};

export const email = (value: string): boolean =>
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        value,
    )
export const phone = (value: string): boolean =>
    /^\+?[0-9]\d{1,14}$/.test(
        value,
    )

export const maxValue = (config: {max: number}) => (value: string) => {
    let isValid = true;
    if (config.max) {
        isValid = isValid && value.length <= config.max;
    }
    return isValid;
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export type StateToSaveType = {
    count: {
        value: string | number
        startValue: number
        maxValue: number
    }
}
export const saveState = (state: StateToSaveType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
};
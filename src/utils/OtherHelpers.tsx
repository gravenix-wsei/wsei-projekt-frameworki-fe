const getDaysAgo = (date :Date): number => {
    let milisecondsDiff = (new Date()).getTime() - (new Date(date)).getTime();
    return milisecondsDiff/(1000*60*60*24);
}

export {
    getDaysAgo,
};
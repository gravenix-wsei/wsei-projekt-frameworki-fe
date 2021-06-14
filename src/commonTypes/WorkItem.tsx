type WorkItem = {
    title: string,
    description: string,
    type: string, // TODO maybe enum ?
    lastUpdated: Date,
}

export default WorkItem;
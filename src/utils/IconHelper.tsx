function getImageFromName(iconName :string) {
    var basePath = '/img/';
    return basePath + getFilename(iconName);
}

function getFilename(iconName :string) {
    switch (iconName) {
        case 'Home':
            return 'house.svg';
        case 'Messages':
            return 'comments.svg';
        case 'Notifications':
            return 'bell.svg';
        case 'Logo':
            return 'logo.png';
        case 'YourNetwork':
        case 'Network':
            return 'people.svg';
        case 'YourPublications':
        case 'Publications':
            return 'publications.svg';
        case 'Ecosystem':
            return 'ecosystem.svg';
        case 'Entities':
            return 'entities.svg';
        case 'Search':
            return 'search.svg';
    }
}

export default getImageFromName;
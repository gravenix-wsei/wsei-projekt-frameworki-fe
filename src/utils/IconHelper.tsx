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
        case "Corporate":
            return 'entities2.svg';
        case "Edit":
            return "edit.svg";
        case 'Search':
            return 'search.svg';
        case 'User':
            return 'people.svg';
        case 'Administration':
            return 'administration.svg';
        case "Logout":
            return 'logout.svg';
        case "ArrowDown":
            return 'arrow-down.svg';
        case "Settings":
            return "cog.svg";
        case "Grid": 
            return "grid.svg";
        case "List": 
            return "list.svg";
    }
}

export default getImageFromName;
import axios from 'axios';

const BASE_URL = 'http://localhost:3333/api';

const buildUrl = (resource :string) => `${BASE_URL}/${resource}`;

const handleRequest = (request :Promise<any>) => 
    request
        .then((response :any) => response.data)
        .catch((error) => {
            console.log('There was an error processing the request: ' + error.toString());
        });
    


const getWorkspaces = () => handleRequest(axios.get(buildUrl('workspaces')));

const getYourWork = () => handleRequest(axios.get(buildUrl('your-work')));

export {
    getWorkspaces,
    getYourWork,
}
import axios from 'axios';
import Workspace from '../commonTypes/Workspace';

const BASE_URL = 'http://localhost:3333/api';

const buildUrl = (resource :string) => `${BASE_URL}/${resource}`;

const handleRequest = (request :Promise<any>) => 
    request
        .then((response :any) => response.data)
        .catch((error) => {
            console.log('There was an error processing the request: ' + error.toString());
        });
    


const getWorkspaces = () => handleRequest(
    axios.get(buildUrl('workspaces'))).then(
        (data :any) => {
            data.lastUpdated = new Date(data.lastUpdated);
            return data as Workspace[];
        }
);

export {
    getWorkspaces
}
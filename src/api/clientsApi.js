import axios from 'axios';

const developmentURL = "https://localhost:8080";
const productionURL = "https://future-trans-systems.com";

const createNewClient = async function (authToken, clientData) {
    return await axios.get(developmentURL + "/rides/new-ride-request" + clientData, {
        headers: {
           authorization: authToken
        }
    });
};

const fetchAllClients = async function (authToken) {
    return await axios.get(developmentURL + "/clients/fetch-all-clients" + authToken, {
        headers: {
            authorization: authToken
        }
    });
}

const deleteActiveClient = async function (authToken, id) {
    return await axios.delete(developmentURL + "/clients/delete-client" + id, {
        headers: {
            authorization: authToken,
            scope: "delete active client with id " + id
        }
    });
};

const updateActiveClient = async function (authToken, id, body) {
    return await axios.post(developmentURL + "/clients/update-active-client" + id, body, {
        headers: {
            authorization: authToken,
            scope: "update existing client with id " + id
        }
    })
};

const fetchUniqueClient = async function (authToken, id) {
    return await axios.get(developmentURL + "/clients/fetch-active-client" + id, {
        headers: {
            authorization: authToken,
            scope: "fetch unique client with id " + id
        }
    })
};

export default (createNewClient, fetchAllClients, deleteActiveClient,updateActiveClient, fetchUniqueClient);
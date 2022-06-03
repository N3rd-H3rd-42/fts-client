import axios from 'axios';

const developmentURL = "https://localhost:8080";
const productionURL = "https://future-trans-systems.com";

const createNewApplication = async function (authToken, applicantData) {
    return await axios.get(developmentURL + "/applications/new-application" + applicantData, {
        headers: {
            authorization: authToken
        }
    });
};

const fetchAllApplications = async function (authToken) {
    return await axios.get(developmentURL + "/applications/fetch-all-applications" + authToken, {
        headers: {
            authorization: authToken
        }
    });
}

const deleteActiveApplication = async function (authToken, id) {
    return await axios.delete(developmentURL + "/applications/delete-active-application" + id, {
        headers: {
            authorization: authToken,
            scope: "delete active application with id " + id
        }
    });
};

const updateActiveApplication = async function (authToken, id, body) {
    return await axios.post(developmentURL + "/applications/update-active-application" + id, body, {
        headers: {
            authorization: authToken,
            scope: "update existing application with id " + id
        }
    })
};

const fetchUniqueApplication = async function (authToken, id) {
    return await axios.get(developmentURL + "/applications/fetch-active-application" + id, {
        headers: {
            authorization: authToken,
            scope: "fetch unique application with id " + id
        }
    })
};

export default (createNewApplication, fetchAllApplications, deleteActiveApplication, updateActiveApplication, fetchUniqueApplication);
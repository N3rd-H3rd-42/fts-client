import axios from 'axios';

const developmentURL = "https://localhost:8080";
const productionURL = "https://future-trans-systems.com";

const createRideRequest = async function (client, rideData) {
    return await axios.get(developmentURL + "/rides/new-ride-request" + client, rideData, {
        headers: {
            client, rideData
        }
    });
};

const fetchAllRideRequests = async function (authToken) {
    return await axios.get(developmentURL + "/rides/get-all-ride-requests" + authToken, {
        headers: {
            authorization: authToken
        }
    });
}

const deleteRideRequest = async function (authToken, id) {
    return await axios.delete(developmentURL + "/rides/delete-active-ride/" + id, {
        headers: {
            authorization: authToken,
            scope: "delete ride request with id " + id
        }
    });
};

const updateRideRequest = async function (authToken, id, body) {
    return await axios.post(developmentURL + "/rides/update-active-ride/" + id, body, {
        headers: {
            authorization: authToken,
            scope: "update existing ride request with id " + id
        }
    })
};

const fetchUniqueRideRequest = async function (authToken, id) {
    return await axios.get(developmentURL + "/rides/fetch-active-ride" + id, {
        headers: {
            authorization: authToken,
            scope: "fetch unique ride request with id " + id
        }
    })
};

export default (createRideRequest, fetchAllRideRequests, deleteRideRequest, updateRideRequest, fetchUniqueRideRequest);
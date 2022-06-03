import axios from 'axios';

const developmentURL = "https://localhost:8080";
const productionURL = "https://future-trans-systems.com";

const login = async function (body) {
    return await axios.post(developmentURL + "/auth/login", body)
};

const logout = async function (token) {
    return await axios.get(developmentURL + "/auth/logout/" + token)
};

const fetchAllData = async function (token) {
    const clients = await axios.get(developmentURL + "/auth/fetchAll/clients" + token);
    const applications = await axios.get(developmentURL + "/auth/fetchAll/applications" + token);
    const rides = await axios.get(developmentURL + "/auth/fetchAll/rides" + token);
};

export default (login, logout, fetchAllData);
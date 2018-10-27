import axios from "axios";
const API_URL = "https://java-server-assignment-5.herokuapp.com";

export default class ModuleService {

    static findAllModules = () => {
        return axios.get(API_URL + "/api/module", {withCredentials: true});
    };

    static createModule = Module => {
        return axios.post(API_URL + "/api/module", Module, {withCredentials: true});
    };

    static deleteModule = ModuleId => {
        return axios.delete(API_URL + "/api/module/" + ModuleId, {withCredentials: true});
    };

    static findModuleById = ModuleId => {
        return axios.get(API_URL + "/api/module/" + ModuleId, {withCredentials: true});
    };

    static updateModule = (ModuleId, ModuleToUpdate) => {
        return axios.put(API_URL + "/api/module/" + ModuleId, ModuleToUpdate, {withCredentials: true});
    };
}
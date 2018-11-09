import axios from "axios";
const API_URL = "https://java-server-assignment6.herokuapp.com";

export default class LinkWidgetService {


    static createLinkwidget = (tid, widget) => {
        return axios.post(API_URL + "/api/topic/"+ tid + "/widget/Link", widget, {withCredentials: true});
    };

    static deleteLinkwidget = widgetId => {
        return axios.delete(API_URL + "/api/widget/" + widgetId + "/Link", {withCredentials: true});
    };

    static findLinkWidgetById = widgetId => {
        return axios.get(API_URL + "/api/widget/" + widgetId  + "/Link", {withCredentials: true});
    };

    static updateLinkWidget = (widgetId, widgetToUpdate) => {
        return axios.put(API_URL + "/api/widget/" + widgetId + "/Link", widgetToUpdate, {withCredentials: true});
    };
}
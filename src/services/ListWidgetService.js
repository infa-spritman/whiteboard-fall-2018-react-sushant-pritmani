import axios from "axios";
const API_URL = "http://localhost:8080";

export default class ListWidgetService {


    static createListwidget = (tid, widget) => {
        return axios.post(API_URL + "/api/topic/"+ tid + "/widget/List", widget, {withCredentials: true});
    };

    static deleteListwidget = widgetId => {
        return axios.delete(API_URL + "/api/widget/" + widgetId + "/List", {withCredentials: true});
    };

    static findListWidgetById = widgetId => {
        return axios.get(API_URL + "/api/widget/" + widgetId  + "/List", {withCredentials: true});
    };

    static updateListWidget = (widgetId, widgetToUpdate) => {
        return axios.put(API_URL + "/api/widget/" + widgetId + "/List", widgetToUpdate, {withCredentials: true});
    };
}
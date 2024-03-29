import axios from "axios";
const API_URL = "https://java-server-assignment6.herokuapp.com";

export default class WidgetService {

    static findAllWidgets = (tid) => {
        return axios.get(API_URL + "/api/topic/"+ tid + "/widget", {withCredentials: true});
    };

    static createwidget = (tid, widget) => {
        return axios.post(API_URL + "/api/topic/"+ tid + "/widget", widget, {withCredentials: true});
    };

    static saveAllWidgets = (tid, widgets) => {
        return axios.post(API_URL + "/api/topic/"+ tid + "/widget/save", widgets, {withCredentials: true});
    };

    static deletewidget = widgetId => {
        return axios.delete(API_URL + "/api/widget/" + widgetId, {withCredentials: true});
    };

    static findwidgetById = widgetId => {
        return axios.get(API_URL + "/api/widget/" + widgetId, {withCredentials: true});
    };

    static updatewidget = (widgetId, widgetToUpdate) => {
        return axios.put(API_URL + "/api/widget/" + widgetId, widgetToUpdate, {withCredentials: true});
    };
}
import axios from "axios";
const API_URL = "http://localhost:8080";

export default class HeadingWidgetService {


    static createHeadingwidget = (tid, widget) => {
        return axios.post(API_URL + "/api/topic/"+ tid + "/widget/heading", widget, {withCredentials: true});
    };

    static deleteHeadingwidget = widgetId => {
        return axios.delete(API_URL + "/api/widget/" + widgetId + "/heading", {withCredentials: true});
    };

    static findHeadingWidgetById = widgetId => {
        return axios.get(API_URL + "/api/widget/" + widgetId  + "/heading", {withCredentials: true});
    };

    static updateHeadingWidget = (widgetId, widgetToUpdate) => {
        return axios.put(API_URL + "/api/widget/" + widgetId + "/heading", widgetToUpdate, {withCredentials: true});
    };
}
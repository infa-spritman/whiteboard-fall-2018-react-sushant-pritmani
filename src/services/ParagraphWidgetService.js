import axios from "axios";
const API_URL = "http://localhost:8080";

export default class ParagraphWidgetService {


    static createParagraphwidget = (tid, widget) => {
        return axios.post(API_URL + "/api/topic/"+ tid + "/widget/Paragraph", widget, {withCredentials: true});
    };

    static deleteParagraphwidget = widgetId => {
        return axios.delete(API_URL + "/api/widget/" + widgetId + "/Paragraph", {withCredentials: true});
    };

    static findParagraphWidgetById = widgetId => {
        return axios.get(API_URL + "/api/widget/" + widgetId  + "/Paragraph", {withCredentials: true});
    };

    static updateParagraphWidget = (widgetId, widgetToUpdate) => {
        return axios.put(API_URL + "/api/widget/" + widgetId + "/Paragraph", widgetToUpdate, {withCredentials: true});
    };
}
import axios from "axios";
const API_URL = "http://localhost:8080";

export default class ImageWidgetService {


    static createImagewidget = (tid, widget) => {
        return axios.post(API_URL + "/api/topic/"+ tid + "/widget/Image", widget, {withCredentials: true});
    };

    static deleteImagewidget = widgetId => {
        return axios.delete(API_URL + "/api/widget/" + widgetId + "/Image", {withCredentials: true});
    };

    static findImageWidgetById = widgetId => {
        return axios.get(API_URL + "/api/widget/" + widgetId  + "/Image", {withCredentials: true});
    };

    static updateImageWidget = (widgetId, widgetToUpdate) => {
        return axios.put(API_URL + "/api/widget/" + widgetId + "/Image", widgetToUpdate, {withCredentials: true});
    };
}
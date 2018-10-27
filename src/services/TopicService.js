import axios from "axios";
const API_URL = "https://java-server-assignment-5.herokuapp.com";

export default class TopicService {

    static findAllTopics = () => {
        return axios.get(API_URL + "/api/topic", {withCredentials: true});
    };

    static createTopic = Topic => {
        return axios.post(API_URL + "/api/topic", Topic, {withCredentials: true});
    };

    static deleteTopic = TopicId => {
        return axios.delete(API_URL + "/api/topic/" + TopicId, {withCredentials: true});
    };

    static findTopicById = TopicId => {
        return axios.get(API_URL + "/api/topic/" + TopicId, {withCredentials: true});
    };

    static updateTopic = (TopicId, TopicToUpdate) => {
        return axios.put(API_URL + "/api/topic/" + TopicId, TopicToUpdate, {withCredentials: true});
    };
}
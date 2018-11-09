import axios from "axios";
const API_URL = "https://java-server-assignment6.herokuapp.com";

export default class TopicService {

    static findAllTopics = (lid) => {
        return axios.get(API_URL + "/api/lesson/"+ lid + "/topic", {withCredentials: true});
    };

    static createTopic = (lid, Topic) => {
        return axios.post(API_URL + "/api/lesson/"+ lid + "/topic", Topic, {withCredentials: true});
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
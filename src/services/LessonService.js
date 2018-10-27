import axios from "axios";
const API_URL = "https://java-server-assignment-5.herokuapp.com/";

export default class LessonService {

    static findAllLessons = () => {
        return axios.get(API_URL + "/api/lesson", {withCredentials: true});
    };

    static createLesson = Lesson => {
        return axios.post(API_URL + "/api/lesson", Lesson, {withCredentials: true});
    };

    static deleteLesson = LessonId => {
        return axios.delete(API_URL + "/api/lesson/" + LessonId, {withCredentials: true});
    };

    static findLessonById = LessonId => {
        return axios.get(API_URL + "/api/lesson/" + LessonId, {withCredentials: true});
    };

    static updateLesson = (LessonId, LessonToUpdate) => {
        return axios.put(API_URL + "/api/lesson/" + LessonId, LessonToUpdate, {withCredentials: true});
    };
}
import axios from "axios";
const API_URL = "http://localhost:8080";

export default class LessonService {

    static findAllLessons = (mid) => {
        return axios.get(API_URL + "/api/module/"+ mid +"/lesson", {withCredentials: true});
    };

    static createLesson = (mid, Lesson) => {
        return axios.post(API_URL + "/api/module/" + mid + "/lesson", Lesson, {withCredentials: true});
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
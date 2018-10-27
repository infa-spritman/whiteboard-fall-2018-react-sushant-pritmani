import axios from 'axios';
const API_URL = "http://localhost:8080/";

let courses = [
    {
        "id": "123",
        "title": "Course 1",
        "modules": [
            {
                "id": "123",
                "title": "Module 1 1",
                "lessons": [
                    {
                        "id": "123",
                        "title": "Lesson 1 1 1",
                        "topics": [
                            {
                                "id": "123",
                                "title": "Topic 1 1 1 1",
                                "widgets": [
                                    {
                                        "id": '123',
                                        "name": 'widget 1 - name',
                                        "type": 'HEADING',
                                        "size": 1,
                                        "text": 'Heading 1'
                                    },
                                    {
                                        "id": '234',
                                        "name": 'widget 2 - name',
                                        "type": 'HEADING',
                                        "size": 2,
                                        "text": 'Heading 2'
                                    },
                                    {
                                        "id": '456',
                                        "name": 'widget 3 - name',
                                        "type": 'PARAGRAPH',
                                        "text": 'lorem ipsum'
                                    },
                                    {
                                        "id": '2389',
                                        "name": 'widget 3 - Image',
                                        "type": 'IMAGE',
                                        "link": 'https://picsum.photos/400/300'
                                    },
                                    {
                                        "id": '238978',
                                        "name": 'widget 3 - Image',
                                        "type": 'LINK',
                                        "link": 'https://www.youtube.com/user/jannunzi',
                                        "link_text": "Home Page"
                                    }
                                ]

                            },
                            {
                                "id": "234",
                                "title": "Topicxyz",
                                "widgets": [
                                    {
                                        "id": '1234',
                                        "name": 'Heading 1 - name',
                                        "type": 'HEADING',
                                        "size": 1,
                                        "text": 'Heading 1'
                                    },
                                    {
                                        "id": '4567',
                                        "name": 'list 1',
                                        "type": 'LIST',
                                        "list_type": "ORDERED",
                                        "options": 'option 1\noption 2\noption 3\noption 4\noption 5'
                                    },
                                    {
                                        "id": '45343',
                                        "name": 'list 2',
                                        "type": 'LIST',
                                        "list_type": "ORDERED",
                                        "options": 'option 1\noption 2\noption 3'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "234",
                        "title": "Lesson 1 1 2",
                        "topics": [
                            {
                                "id": "456",
                                "title": "Topic 1 1 2 1"
                            },
                            {
                                "id": "7892",
                                "title": "Topic 1 1 3 1"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "234",
                "title": "Module 1 2",
                "lessons": [
                    {
                        "id": "345",
                        "title": "Lesson 1 2 1",
                        "topics": [
                            {
                                "id": "908",
                                "title": "Topic 1 2 1 1"
                            },
                            {
                                "id": "9080",
                                "title": "Topic 1 2 1 2"
                            }
                        ]
                    },
                    {
                        "id": "456",
                        "title": "Lesson 1 2 2",
                        "topics": [
                            {
                                "id": "45678",
                                "title": "Topic 1 2 2 1"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "234",
        "title": "Course 2",
        "modules": [
            {
                "id": "345",
                "title": "Module 2 1",
                "lessons": [
                    {
                        "id": "567",
                        "title": "Lesson 1 3 1",
                        "topics": []
                    },
                    {
                        "id": "678",
                        "title": "Lesson 1 3 2",
                        "topics": []
                    }
                ]
            },
            {
                "id": "456",
                "title": "Module 2 2",
                "lessons": []
            }
        ]
    },
    {
        "id": "345",
        "title": "Course 3",
        "modules": [
            {
                "id": "567",
                "title": "Module 3 1",
                "lessons": []
            },
            {
                "id": "678",
                "title": "Module 3 2",
                "lessons": []
            }
        ]
    },
    {
        "id": "456",
        "title": "Course 4"
    },
    {
        "id": "34324",
        "title": "Course 5"
    },
    {
        "id": "423424",
        "title": "Course 6"
    }
]

export default class CourseService {

    static findAllCourses = () => { return axios.get(API_URL + "/api/course", {withCredentials: true}); };

    static createCourse = course => { return axios.post(API_URL + "/api/course", course, {withCredentials: true}); };

    static deleteCourse = courseId => { return axios.delete(API_URL + "/api/course/" + courseId, {withCredentials: true}); };

    static findCourseById = courseId => { return axios.get(API_URL + "/api/course/" + courseId, {withCredentials: true}); };

    static updateCourse = (courseId, courseToUpdate) => { return axios.put(API_URL + "/api/course/" + courseId, courseToUpdate, {withCredentials: true}); };


    static updateWidget = (widgetId, widget) => {
        courses = courses.map(course => {
            if (course.modules)
                course.modules = course.modules.map(module => {
                    if (module.lessons)
                        module.lessons = module.lessons.map(lesson => {
                            if (lesson.topics)
                                lesson.topics = lesson.topics.map(topic => {
                                    if (topic.widgets)
                                        topic.widgets = topic.widgets.map(widgetemp => {
                                            if (widgetemp.id === widget.id)
                                                return widget;
                                            return widgetemp;
                                        })
                                    return topic;
                                })
                            return lesson
                        })
                    return module;
                })

            return course;

        })
    }

    static findWidgetsForTopic = forTopic => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            return courses[c].modules[m].lessons[l].topics[t].widgets
                        }
                    }
                }
            }
        }
    }

    static deleteWidget = (widgetId) => {
        courses = courses.map(course => {
            if (course.modules)
                course.modules = course.modules.map(module => {
                    if (module.lessons)
                        module.lessons = module.lessons.map(lesson => {
                            if (lesson.topics)
                                lesson.topics = lesson.topics.map(topic => {
                                    if (topic.widgets)
                                        topic.widgets = topic.widgets.filter(widgetemp => widgetemp.id !== widgetId)
                                    return topic;
                                })
                            return lesson
                        })
                    return module;
                })

            return course;

        })
        // console.log(courses)
    }

    static updateWidgetsForTopic = (forTopic, new_widgets) => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            courses[c].modules[m].lessons[l].topics[t].widgets = new_widgets;
                        }
                    }
                }
            }
        }
    }

    static findWidgets = topicId => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            return courses[c].modules[m].lessons[l].topics[t].widgets || [];
                        }
                    }
                }
            }
        }
    };

    static findWidget = widgetId => {
        for (let c in courses) {
            for (let m in courses[c].modules) {
                for (let l in courses[c].modules[m].lessons) {
                    for (let t in courses[c].modules[m].lessons[l].topics) {
                        for(let w in courses[c].modules[m].lessons[l].topics[t].widgets){
                            if (courses[c].modules[m].lessons[l].topics[t].widgets[w].id === widgetId) {
                                return courses[c].modules[m].lessons[l].topics[t].widgets[w];
                            }
                        }
                    }
                }
            }
        }
    };



    static createWidget = (topicId, widget) => {
        courses = courses.map(course => {
            if (course.modules)
                course.modules = course.modules.map(module => {
                    if (module.lessons)
                        module.lessons = module.lessons.map(lesson => {
                            if (lesson.topics)
                                lesson.topics = lesson.topics.map(topic => {
                                    if (topic.id === topicId) {
                                        if (topic.widgets)
                                            topic.widgets = [...topic.widgets, widget]
                                        else
                                            topic.widgets = [widget]
                                    }

                                    return topic;
                                })
                            return lesson
                        })
                    return module;
                })

            return course;

        })
    }

    static selectWidget = (widget, new_widget_type) => {
        const widget_id = widget.id;
        const widget_name = widget.name;
        let temp = {};
        if (widget.type !== new_widget_type) {
            switch (new_widget_type) {

                case "HEADING":
                    temp = {
                        "id": widget_id,
                        "name": widget_name,
                        "type": 'HEADING',
                        "size": 1,
                        "text": ''
                    };
                    CourseService.updateWidget(widget_id, temp);
                    break;

                case "PARAGRAPH":
                    temp = {
                        "id": widget_id,
                        "name": widget_name,
                        "type": 'PARAGRAPH',
                        "text": ''
                    };
                    CourseService.updateWidget(widget_id, temp);
                    break;

                case "LINK":
                    temp = {
                        "id": widget_id,
                        "name": widget_name,
                        "type": 'LINK',
                        "link": '',
                        "link_text": ""
                    };
                    CourseService.updateWidget(widget_id, temp);
                    break;

                case "IMAGE":
                    temp = {
                        "id": widget_id,
                        "name": widget_name,
                        "type": 'IMAGE',
                        "link": ''
                    };
                    CourseService.updateWidget(widget_id, temp);
                    break;

                case "LIST":
                    temp = {
                        "id": widget_id,
                        "name": widget_name,
                        "type": 'LIST',
                        "list_type": "UNORDERED",
                        "options": ''
                    };
                    CourseService.updateWidget(widget_id, temp)
            }

        }

    }
}
import CourseService from '../services/CourseService'
import randomId from 'random-id'

const WidgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case "INIT":
            // console.log("INIT", (new Date()).getTime())
            return {
                widgets: action.widgets,
                selectedTopic: action.topic
            };
        case "SAVE":
            // console.log("INIT", (new Date()).getTime())
            return {
                widgets: action.widgets,
                selectedTopic: action.topic
            };
        case "DELETE_WIDGET":
            let prev_widgets_delete = state.widgets.slice(0);
            if (prev_widgets_delete)
                prev_widgets_delete = prev_widgets_delete.filter(widgetemp => widgetemp.id !== action.widget.id);

            return {
                widgets: prev_widgets_delete.slice(0),
                selectedTopic: state.selectedTopic
            };
        case "UPDATE_WIDGET":
            let prev_widgets = state.widgets ? state.widgets.slice(0) : [];
            if (prev_widgets && prev_widgets.length)
                prev_widgets = prev_widgets.map(widgetemp => {
                    if (widgetemp.id === action.widget.id)
                        return action.widget;
                    return widgetemp;
                });
            return {
                widgets: prev_widgets ? prev_widgets.slice(0) : [],
                selectedTopic: state.selectedTopic
            };
        case "MOVE_WIDGET":
            let local_index = action.index;
            if (action.direction === "DOWN")
                local_index += 1;
            const new_widgets = [...state.widgets.slice(0, local_index - 1),
                ...state.widgets.slice(local_index, local_index + 1),
                ...state.widgets.slice(local_index - 1, local_index),
                ...state.widgets.slice(local_index + 1)];
            return {
                widgets: new_widgets,
                selectedTopic: state.selectedTopic
            };
        case "CREATE_WIDGET":
            let new_widget = {
                'id' : randomId(5,'09') ,
                "name": '',
                "widgetType": 'HEADING',
                "size": 1,
                "text": ''
            };
            let newAddedWidgets;
            if (state.widgets.length)
                newAddedWidgets = [...state.widgets, new_widget];
            else
                newAddedWidgets = [new_widget];
            return {
                widgets: newAddedWidgets.slice(),
                selectedTopic: state.selectedTopic
            };
        case "SELECT_WIDGET":
            const widget_id = action.widget.id;
            const widget_name = action.widget.name;
            let temp = Object.assign({}, action.widget);
            if (action.widget.widgetType !== action.new_widget_type) {
                switch (action.new_widget_type) {

                    case "HEADING":
                        temp = {
                            "id": widget_id,
                            "name": widget_name,
                            "widgetType": 'HEADING',
                            "size": 1,
                            "text": ''
                        };
                        break;

                    case "PARAGRAPH":
                        temp = {
                            "id": widget_id,
                            "name": widget_name,
                            "widgetType": 'PARAGRAPH',
                            "text": ''
                        };
                        break;

                    case "LINK":
                        temp = {
                            "id": widget_id,
                            "name": widget_name,
                            "widgetType": 'LINK',
                            "link": '',
                            "link_text": ""
                        };
                        break;

                    case "IMAGE":
                        temp = {
                            "id": widget_id,
                            "name": widget_name,
                            "widgetType": 'IMAGE',
                            "link": ''
                        };
                        break;

                    case "LIST":
                        temp = {
                            "id": widget_id,
                            "name": widget_name,
                            "widgetType": 'LIST',
                            "list_type": "UNORDERED",
                            "options": ''
                        };
                }

            }
            let prev_widgets_select = state.widgets ? state.widgets.slice(0) : [];
            if (prev_widgets_select && prev_widgets_select.length)
                prev_widgets_select = prev_widgets_select.map(widgetemp => {
                    if (widgetemp.id === action.widget.id)
                        return temp;
                    return widgetemp;
                });
            return {
                widgets: prev_widgets_select ? prev_widgets_select.slice(0) : [],
                selectedTopic: state.selectedTopic
            };
        default:
            return state
    }
};

export default WidgetReducer
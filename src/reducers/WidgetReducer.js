import CourseService from '../services/CourseService'

const WidgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case "INIT":
            // console.log("INIT", (new Date()).getTime())
            return {
                widgets: action.widgets,
                selectedTopic: action.topic
            };
        case "DELETE_WIDGET":
            return {
                widgets: action.widgets,
                selectedTopic: state.selectedTopic
            };
        // case "UPDATE_WIDGET":
        //     CourseService.updateWidget(action.widget.id, action.widget)
        //     return {
        //         widgets: CourseService.findWidgetsForTopic(state.selectedTopic).slice(0),
        //         selectedTopic: state.selectedTopic
        //     };
        // case "MOVE_WIDGET":
        //     let local_index = action.index;
        //     if (action.direction === "DOWN")
        //         local_index += 1;
        //     const new_widgets = [...state.widgets.slice(0, local_index - 1),
        //         ...state.widgets.slice(local_index, local_index + 1),
        //         ...state.widgets.slice(local_index - 1, local_index),
        //         ...state.widgets.slice(local_index + 1)];
        //     CourseService.updateWidgetsForTopic(state.selectedTopic, new_widgets);
        //     return {
        //         widgets: CourseService.findWidgetsForTopic(state.selectedTopic).slice(0),
        //         selectedTopic: state.selectedTopic
        //     };
        case "CREATE_WIDGET":
            return {
                widgets: action.widgets,
                selectedTopic: state.selectedTopic
            };
        // case "SELECT_WIDGET":
        //     CourseService.selectWidget(action.widget, action.new_widget_type);
        //     return {
        //         widgets: CourseService.findWidgetsForTopic(state.selectedTopic).slice(0),
        //         selectedTopic: state.selectedTopic
        //     };
        // case "FIND_WIDGET":
        //     return {
        //         widgets: CourseService.findWidget(action.widget.id).slice(0),
        //         selectedTopic: state.selectedTopic
        //     };
        // case "FIND_ALL_WIDGETS_FOR_TOPIC":
        //     return {
        //         widgets: CourseService.findWidgets(state.selectedTopic.id).slice(0),
        //         selectedTopic: state.selectedTopic
        //     };
        // case "FIND_ALL_WIDGETS":
        //     return {
        //         widgets: CourseService.findWidgetsForTopic(state.selectedTopic).slice(0),
        //         selectedTopic: state.selectedTopic
        //     };
        default:
            return state
    }
}

export default WidgetReducer
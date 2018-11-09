import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import WidgetService from '../services/WidgetService'
import HeadingWidgetService from '../services/HeadingWidgetService'
import "../css/Home.css";


const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatcherToPropertyMapper = dispatch => ({
    init: (widgets, topic) => dispatch({
        type: 'INIT',
        widgets: widgets,
        topic: topic
    }),
    loadWidgets: (topic) => {
        return WidgetService.findAllWidgets(topic.id)
            .then(res => (res.data))
            .then(widgets => dispatch({
                type: 'INIT',
                widgets: widgets,
                topic: topic
            }));
    },
    deleteWidget: (widget,topic) => dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
    }),
    updateWidget: widget => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget
    }),
    createWidget: (topic) => dispatch({
        type: 'CREATE_WIDGET'
    }),
    moveWidget: (index, direction, widget) => dispatch({
        type: 'MOVE_WIDGET',
        widget: widget,
        index: index,
        direction: direction
    }),
    selectWidget: (widget, new_widget_type) => dispatch({
        type: 'SELECT_WIDGET',
        widget: widget,
        new_widget_type: new_widget_type
    }),
    findWidget: widget => dispatch({
        type: 'FIND_WIDGET',
        widget: widget
    }),
    findAllWidgetsForTopic: () => dispatch({
        type: 'FIND_ALL_WIDGETS_FOR_TOPIC'
    }),
    findAllWidgets: () => dispatch({
        type: 'FIND_ALL_WIDGETS',
    }),
    saveAllWidgets: (topic, widgets) => {
        return WidgetService.saveAllWidgets(topic.id, widgets)
            .then(res => (res.data))
            .then(widgets => dispatch({
                type: 'SAVE',
                widgets: widgets,
                topic: topic
            }));
    }

});

const WidgetListContainer = connect
(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList)

export default WidgetListContainer
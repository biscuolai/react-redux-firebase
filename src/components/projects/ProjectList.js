import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary';

export default class ProjectList extends Component {
    render() {
        return (
            <div className='project-list section'>
                <ProjectSummary />
                <ProjectSummary />
                <ProjectSummary />
            </div>
        )
    }
}
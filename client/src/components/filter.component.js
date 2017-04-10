/**
 * Created by IlyaLitvinov on 08.04.17.
 */
import React, { Component } from 'react';

export default class Filter extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
    }

    onChange() {

        this.props.onChangeFilter(this.props.filter);
    }

    render() {
        console.log(this.props);
        const {filter, activeFilter} = this.props;
        return <div>
            <input
                type="radio" name="filters"
                checked={filter === activeFilter}
                onChange={this.onChange.bind(this)}
                value={filter}/><span>{filter}</span>
        </div>
    }
}
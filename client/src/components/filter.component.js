/**
 * Created by IlyaLitvinov on 08.04.17.
 */
import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        console.log(this.props);
        const {filter, checked} = this.props;
        return <div>
            <input
                type="radio" name="filters"
                   checked={checked}
                   onClick={this.props.onFilterItems(filter)}
                   value={filter}/><span>{filter}</span>
        </div>
    }
}
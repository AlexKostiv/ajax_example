/**
 * Created by IlyaLitvinov on 07.04.17.
 */
import React, { Component } from 'react';
import { setVisibilityFilter, VisibilityFilters } from '../actions/actions';
import { connect } from 'react-redux';
import Filter from '../components/filter.component';

class Footer extends Component {
    createInput() {
        const content = [];
        const {onFilterItems, activeFilter} = this.props;
        let i = 0;
        console.log(activeFilter);
        for (let _filter in VisibilityFilters) {
            if (VisibilityFilters.hasOwnProperty(_filter)) {
                const checked = _filter === activeFilter;
                content.push(<Filter key={++i}
                    filter={_filter} checked={checked} onFilterItems={onFilterItems} />);
            }
        }

        return content;

    }

    render() {
        const content = this.createInput();

        return <div>{content}</div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterItems: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    }
};

const mapStateToProps = (state) => {
    return {
        activeFilter: state.visibilityFilters
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

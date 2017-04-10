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
        const {onChangeFilter, activeFilter} = this.props;
        let i = 0;

        for (let _filter in VisibilityFilters) {
            if (VisibilityFilters.hasOwnProperty(_filter)) {
                content.push(<Filter key={++i}
                    filter={_filter} activeFilter={activeFilter} onChangeFilter={onChangeFilter} />);
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
        onChangeFilter: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    }
};

const mapStateToProps = (state) => {
    return {
        activeFilter: state.visibilityFilter
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

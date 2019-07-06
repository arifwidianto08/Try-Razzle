import Component from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

const mapStateToProps = state => {
	return {
		todos: state.todos.todos,
		isLoading: state.loading.isLoading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);

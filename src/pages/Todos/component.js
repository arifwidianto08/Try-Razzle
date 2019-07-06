import React from 'react';
import PrettyPrintJson from '../../utils/PrettyPrintJson';
export default class Component extends React.Component {
	componentDidMount() {
		const { actions } = this.props;
		actions.getData();
	}

	render() {
		if (this.props.isLoading) {
			return <div>Fetching Data...</div>;
		}
		return (
			<div>
				Here is list of todo: <br />
				<PrettyPrintJson data={this.props.todos} />
			</div>
		);
	}
}

import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import PropTypes from 'prop-types';

class UserList extends Component {
	
	componentDidMount() {
		this.props.getUsers();
	}

	loginAsUser = (id) => {
		
	};
	
	render() {
		const { users } = this.props.user;
		return (
			<Container>
				<ListGroup>
					{users.map(({ User_ID, Geo, Industry, Company_Size }) => (
						<ListGroupItem>
							<Button
								className="btn btn-primary"
								size="sm"
								onClick={this.loginAsUser}
								>
								<h3>User ID: {User_ID}</h3>
								<h3>Geo: {Geo}</h3>
								<h3>Industry: {Industry}</h3>
								<h3>Company Size: {Company_Size}</h3>
							</Button>	
						</ListGroupItem>
					)
				)}
				</ListGroup>
			</Container>
		)	
	}
}


UserList.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);

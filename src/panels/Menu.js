import React from 'react';
import PropTypes from 'prop-types';

import { Link, Panel, PanelHeader, Header, Button, Div, Group, PanelHeaderBack, Cell, Avatar } from '@vkontakte/vkui';

import './home.css';

const Menu = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Меню</PanelHeader>
		<Group header={<Header mode="secondary">Ваш профиль: </Header>}>
			<Link  className='profile_href' href={"https://vk.com/id" + props.fetchedUser.id}>
				<Cell
					disabled before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200}/> : null}
					description={"Ваш id: " + props.fetchedUser.id}
				>
					{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
				</Cell>
			</Link>
		</Group>
	</Panel>
);

Menu.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		id: PropTypes.string
	}),
};

export default Menu;

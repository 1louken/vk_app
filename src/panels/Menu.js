import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Div, Group, PanelHeaderBack } from '@vkontakte/vkui';

const startParams = new URLSearchParams(window.location.search)
const userId = startParams.get("vk_user_id")

const Menu = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Меню</PanelHeader>
		<Group header={<Header mode="secondary">Ваш id: {userId} </Header>}>
			<Div>
				<Button stretched size="l" mode="secondary">Кнопка</Button>
			</Div>
		</Group>
	</Panel>
);

Menu.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Menu;

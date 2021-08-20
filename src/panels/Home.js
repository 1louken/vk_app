import React from 'react';
import PropTypes from 'prop-types';

import { Icon24StorefrontOutline, Icon24MenuOutline, Icon28GraphOutline } from '@vkontakte/icons'; 

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Узнать id страницы</PanelHeader>

		<Group header={<Header mode="secondary"></Header>}>
			<Div style={{display: 'flex'}}>
       			<Button size="l" stretched mode="secondary" before={<Icon24MenuOutline/>} onClick={go} data-to="persik">Узнать свой id</Button>
       			<Button size="l" stretched mode="secondary" before={<Icon28GraphOutline/>}>Кнопка</Button>
       			<Button size="l" stretched mode="secondary" before={<Icon24StorefrontOutline/>}>Кнопка</Button>
     		</Div>
     		<Div>
				
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">Узнать свой id</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

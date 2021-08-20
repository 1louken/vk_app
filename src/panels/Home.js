import React from 'react';
import PropTypes from 'prop-types';

import { Icon24StorefrontOutline, Icon24MenuOutline, Icon28GraphOutline } from '@vkontakte/icons'; 

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Узнать id страницы</PanelHeader>

		<Group>
			<Div style={{display: 'flex'}}>
       			<Button size="l" stretched style={{ marginRight: 8 }} stretched mode="secondary" before={<Icon24MenuOutline/>} onClick={go} data-to="menu">Меню</Button>
       			<Button size="l" stretched style={{ marginRight: 8 }} stretched mode="secondary" before={<Icon28GraphOutline/>} onClick={go} data-to="top">Рейтинг</Button>
       			<Button size="l" stretched mode="secondary" before={ <Icon24StorefrontOutline/>} onClick={go} data-to="store">Магазин</Button>

       			<SubnavigationBar>
            		<SubnavigationButton before={<Icon24MenuOutline/>} size="l" textLevel={1}>Меню</SubnavigationButton>
            		<SubnavigationButton before={<Icon28GraphOutline/>} size="l" textLevel={1}>Рейтинг</SubnavigationButton>
            		<SubnavigationButton before={<Icon24StorefrontOutline/>} size="l" textLevel={1}>Магазин</SubnavigationButton>
          		</SubnavigationBar>
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

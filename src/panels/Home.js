import React from 'react';
import PropTypes from 'prop-types';

import { Icon24StorefrontOutline, Icon24MenuOutline, Icon28GraphOutline, Icon28LightbulbCircleFillYellow } from '@vkontakte/icons'; 

import { Title, Placeholder, CardGrid, Card, Text, IconButton, Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import './home.css';
import coin from '../img/coin.png';

console.log('6')


const Home = ({ id, go, fetchedUser, likes, increment }) => (
	<Panel id={id}>
		<PanelHeader>App</PanelHeader>

		<Group>
        	<CardGrid size="l">
          		<Card mode="shadow">
            		<Div className='navigation-bar'>
	       				<Button size="l" className='navigation-button1' stretched mode="secondary" before={<Icon24MenuOutline/>} onClick={go} data-to="menu">Меню</Button>
	       				<Button size="l" className='navigation-button2' stretched mode="secondary" before={<Icon28GraphOutline/>} onClick={go} data-to="top">Топ</Button>
	       				<Button size="l" className='navigation-button3' stretched mode="secondary" before={<Icon24StorefrontOutline/>} onClick={go} data-to="store">Магазин</Button>
	       			</Div>
          		</Card>
        	</CardGrid>
      	</Group>

		<Group>
		    <Title level="3" className='text_head1' weight="medium">Баланс</Title>
		    <Title className='text_head1' level="1" weight="heavy">{likes}</Title>
	    </Group>
	    <img className="button-coin" src={coin} onClick={increment} />
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

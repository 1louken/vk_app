import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import battom from '../img/battom.png';
import menu from '../img/menu.png';

import './Style.css';

const Home = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader>Energy Coin</PanelHeader>
		<Group>
			<img className="Menu" src={menu}/>
			<Div className="Top_botton" onClick={go} data-to="top"></Div>
			<Div className="Trade_botton" onClick={go} data-to="trade"></Div>
			<Div className="Business_botton" onClick={go} data-to="business"></Div>
			<Div className="Shop_botton" onClick={go} data-to="shop"></Div>
			<img src={battom} className="Battom"/>
		</Group>
	</Panel>
)

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;

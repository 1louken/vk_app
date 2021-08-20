import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Div, Group, PanelHeaderBack } from '@vkontakte/vkui';

const startParams = new URLSearchParams(window.location.search)
const userId = startParams.get("vk_user_id")

function send() {
	bridge
	  .send('VKWebAppGetEmail')
	  .then(data => {
	    // Обработка события в случае успеха
	    console.log(data.email);
	  })
	  .catch(error => {
	    // Обработка события в случае ошибки
	  });
	};

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Ваш id</PanelHeader>
		<Group header={<Header mode="secondary">Ваш id: {userId} </Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={send}>Уведомление</Button>
			</Div>s
		</Group>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;

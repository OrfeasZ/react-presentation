import React from 'react'
import { render } from 'react-dom'
import { Spectacle, Deck } from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('../assets/css/style.css');

const images = {
    react_logo: require('../assets/react-logo.svg'),
	idea: require('../assets/editors/idea.png'),
	webstorm: require('../assets/editors/webstorm.png'),
	phpstorm: require('../assets/editors/phpstorm.png'),
	atom: require('../assets/editors/atom.png'),
	nuclide: require('../assets/editors/nuclide.png'),
	vscode: require('../assets/editors/vscode.png'),
	sublime: require('../assets/editors/sublime.png')
};

preloader(images);

const theme = createTheme({
    primary: '#222222'
});

import Slide01 from './slides/Slide01'
import Slide02 from './slides/Slide02'
import Slide03 from './slides/Slide03'
import Slide04 from './slides/Slide04'
import Slide05 from './slides/Slide05'
import Slide07 from './slides/Slide07'
import Slide08 from './slides/Slide08'
import Slide09 from './slides/Slide09'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'
import Slide13 from './slides/Slide13'
import Slide14 from './slides/Slide14'
import Slide15 from './slides/Slide15'
import Slide16 from './slides/Slide16'
import Slide17 from './slides/Slide17'

render(
	<Spectacle theme={theme}>
		<Deck transition={[ 'slide' ]} transitionDuration={500} progress="none">
			{Slide01(images)}
			{Slide02(images)}
			{Slide03(images)}
			{Slide04(images)}
			{Slide05(images)}
			{Slide07(images)}
			{Slide08(images)}
			{Slide09(images)}
			{Slide10(images)}
			{Slide11(images)}
			{Slide12(images)}
			{Slide13(images)}
			{Slide14(images)}
			{Slide15(images)}
			{Slide16(images)}
			{Slide17(images)}
		</Deck>
    </Spectacle>,
    document.getElementById('root')
);

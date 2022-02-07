import NavBarComp from './navbar.js';

function NavBar(props) {
	return <NavBarComp pageName={props.pageName} linkColors={props.linkColors} />;
}

export default NavBar;

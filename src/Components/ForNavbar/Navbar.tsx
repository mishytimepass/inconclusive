import React from "react";
import {Flex,Img,Box,UnorderedList,ListItem} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {HamburgerIcon} from "@chakra-ui/icons";
import styles from "./Navbar.module.css"
type Props = {};

const Navbar = (props: Props) => {
	return (
		<Box className={styles.navbar}>
		<Flex w="100%" justifyContent="space-between" bg="#fff" boxShadow="1px 1px 15px #eeeeee" height="70px" alignItems="center" padding="0 60px">
		<Box>
		<Img maxW="150px" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg" alt="logo" />
		</Box>
		<Flex className={styles.menu}>
			<UnorderedList display="flex" gap="40px" style={{listStyle : "none"}} fontWeight="600" fontSize="18px" color="#3b8fc2" alignItems="center">
				<ListItem><Link to="/">How it Works</Link></ListItem>
				<ListItem><Link to="/">Use Case</Link></ListItem>
				<ListItem><Link to="/">Pricing</Link></ListItem>
				<ListItem><Link to="/">Support</Link></ListItem>
				<ListItem><Link to="/">SignIn</Link></ListItem>
				<ListItem color="#fff" bg="#3b8fc2" p="10px 30px" borderRadius="8px"><Link to="/">Get My Hours Free</Link></ListItem>
			</UnorderedList>
		</Flex>
		<Box className={styles.iconBox}>
			<HamburgerIcon className={styles.menuIcon}/>
		</Box>
	</Flex>
	</Box>
	)
};

export default Navbar;

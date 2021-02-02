import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				height: "200px",
				flexDirection: "row",
				justifyContent: "space-around",
				alignItems: "center",
				backgroundColor: "darkblue",
			}}>
			<Link to="/Counter">
				<button
					style={{
						height: "60px",
						width: "150px",
						backgroundColor: "white",
						color: "blue",
						fontSize: "30px",
						outline: "none",
						textDecoration: "none",
					}}>
					Counter
				</button>
			</Link>
			<Link to="/quote">
				<button
					style={{
						height: "60px",
						width: "150px",
						backgroundColor: "white",
						color: "blue",
						fontSize: "30px",
						outline: "none",
						textDecoration: "none",
					}}>
					{" "}
					quote
				</button>
			</Link>
			<Link to="/State">
				<button
					style={{
						height: "60px",
						width: "150px",
						backgroundColor: "white",
						color: "blue",
						fontSize: "15px",
						outline: "none",
						textDecoration: "none",
					}}>
					StateManagement
				</button>
			</Link>
			<Link to="/PayNow">
				<button
					style={{
						height: "60px",
						width: "150px",
						backgroundColor: "white",
						color: "blue",
						fontSize: "30px",
						outline: "none",
					}}>
					pay now
				</button>
			</Link>
		</div>
	);
}

export default Header;

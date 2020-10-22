import * as React from "react";
import { Location } from "@reach/router";

const { useEffect, useRef } = React;

export type ActionFunction = () => any;

export type IOnRouteChangeProps = {
	action?: ActionFunction;
};

export type IOnRouteChangeWorkerProps = {
	location: {
		pathname: string;
	};
	action: ActionFunction;
};

export const OnRouteChangeWorker: React.FC<IOnRouteChangeWorkerProps> = ({
	location,
	action
}) => {
	const locationRef = useRef("");
	useEffect(() => {
		if (location.pathname !== locationRef.current) {
			locationRef.current = location.pathname;
			action();
		}
	});

	return null;
};

const defaultAction = () => {
	window.scrollTo(0, 0);
};

const OnRouteChange: React.FC<IOnRouteChangeProps> = ({
	action = defaultAction
}) => {
	return (
		<Location>
			{({ location }) => (
				<OnRouteChangeWorker location={location} action={action} />
			)}
		</Location>
	);
};

export default OnRouteChange;

/*
import React, { useEffect, useRef } from "react";
import { Location } from "@reach/router";


const defaultAction = () => {
	window.scrollTo(0, 0);
};

export const OnRouteChangeWorker = props => {
	const locationRef = useRef("");
	useEffect(() => {
		if (props.location.pathname !== locationRef.current) {
			locationRef.current = props.location.pathname;
			props.action();
		}
	});

	return null;
};

const OnRouteChange = ({ action = defaultAction }) => (
	<Location>
		{({ location }) => (
			<OnRouteChangeWorker location={location} action={action} />
		)}
	</Location>
);

export default OnRouteChange;
*/

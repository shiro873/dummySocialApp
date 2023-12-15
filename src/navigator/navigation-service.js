import * as React from "react";
import { CommonActions } from "@react-navigation/native";

export const navigationRef = React.createRef();

export function navigate(routeName, params) {
	routeName && navigationRef.current?.navigate(routeName, params); 
}

export function navigateToNewStack(routeName, params) {
	if (routeName && navigationRef.current) {
		navigationRef.current.navigate(routeName, params);

		navigationRef.current.dispatch((state) => {
			const routes = state.routes.filter((r) => r.name == routeName);

			return CommonActions.reset({
				...state,
				routes,
				index: routes.length - 1,
			});
		});
	}
}

export function navigateToNestedScreen(stackName, routeName, params) {
	if (stackName && routeName && navigationRef.current) {
		navigationRef.current.navigate(stackName, {
			screen: routeName,
			params: params,
		});
	}
}

export function resetStack(routeName) {
	if (routeName && navigationRef.current) {
		navigationRef.current.dispatch((state) => {
			const routes = state.routes.filter((r) => r.name == routeName);

			return CommonActions.reset({
				...state,
				routes,
				index: routes.length - 1,
			});
		});
	}
}

export function goBack() {
	navigationRef.current?.goBack();
}

export function goBackHardwareButton() {
	navigationRef.current?.goBack();
}

export function jumpBack(numberOfScreen) {
	if (navigationRef.current) {
		const stackRoutes = navigationRef.current.getRootState().routes[0];
		const routes = stackRoutes.state.routes;
		const route = routes[routes.length - (numberOfScreen + 1)].name;

		navigationRef.current?.navigate(route);
	}
}

export function recentPath() {
	let recentPath;

	if (navigationRef.current) {
		const stackRoutes = navigationRef.current.getRootState().routes[0];
		const routes = stackRoutes.state.routes;
		recentPath = routes[routes.length - 2].name;
	}

	return recentPath;
}

export function currentRoute() {
	return navigationRef.current?.getCurrentRoute().name;
}

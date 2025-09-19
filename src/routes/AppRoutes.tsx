import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { fallbackRoutes } from "./fallback";
import { publicRoutes } from "./public";


const AppRoutes = () => {
	const allRoutes: RouteObject[] = [
		...publicRoutes,
		...fallbackRoutes,
	];

	const routing = useRoutes(allRoutes);

	return <>{routing}</>;
};

export default AppRoutes;

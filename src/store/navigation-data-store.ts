import { useNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = useNavigationContainerRef()

export const getCurrentRouteName = () => {
    const navigationRoutesList = navigationRef?.current?.getState()?.routes?.[0].state?.routes || [];
    const currentRouteDetail = navigationRoutesList?.[navigationRoutesList.length - 1];
    const currentRouteName = currentRouteDetail?.name;
    return currentRouteName
}
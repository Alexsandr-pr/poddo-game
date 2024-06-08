import Altersky from "components/MainContent/Altersky/Altersky";
import BunpalProfiles from "components/MainContent/BunpalProfiles/BunpalProfiles";
import Home from "components/MainContent/Home/Home/Home";
import MainLeaderbord from "components/MainContent/MainLeaderbord/MainLeaderbord";
import User from "components/MainContent/User/User/User";
import PetStorage from "components/PetStorage/PetStorage/PetStorage";
import Admin from "pages/Admin/Admin";
import { 
    ACTIVITY_ROUTE, 
    ADMIN_ROUTE, 
    ALTERSKY_ROUTE, 
    BUNPAL_ROUTE, 
    CHART_ROUTE, 
    GAME_ROUTE, 
    HOME_ROUTE, 
    LOGOUT_ROUTE,
    PET_ROUTE, 
    SETTINGS_ROUTE, 
    USER_ROUTE 
} from "utils/consts"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component:Home
    },
    {
        path: ALTERSKY_ROUTE,
        Component:Altersky
    },
    {
        path: BUNPAL_ROUTE,
        Component:BunpalProfiles
    },
    {
        path: CHART_ROUTE,
        Component:MainLeaderbord
    },
    {
        path: ACTIVITY_ROUTE,
        Component:Home
    },
    {
        path: GAME_ROUTE,
        Component:Home
    },
    {
        path: USER_ROUTE,
        Component:User
    },
    {
        path: PET_ROUTE,
        Component:PetStorage
    },
    {
        path: SETTINGS_ROUTE,
        Component:Home
    },
    {
        path: LOGOUT_ROUTE,
        Component:Home
    },
]
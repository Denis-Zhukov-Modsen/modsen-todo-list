import {createBrowserRouter, Outlet} from "react-router-dom";
import {Urls} from "@/constants/urls.ts";
import {Main} from "@/pages/Main";
import {Settings} from "@/pages/Settings";
import {Header} from "@/components/Header";
import {Wrapper} from "@/styles.ts";

export const router = createBrowserRouter([
    {
        element: <Wrapper><Header/><Outlet/></Wrapper>,

        children: [
            {
                path: Urls.main,
                element: <Main/>
            },
            {
                path: Urls.settings,
                element: <Settings/>
            }
        ]
    }

])
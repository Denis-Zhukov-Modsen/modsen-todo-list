import {Providers} from "@/components/Providers";
import {RouterProvider} from "react-router-dom";

import {router} from "@/constants/router.tsx";

export const App = () => (
    <Providers>
        <RouterProvider router={router}/>
    </Providers>
)

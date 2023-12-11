import {Provider} from "react-redux";
import {persistor, store} from "@/store";
import {PersistGate} from "redux-persist/integration/react";
import {ThemeProviders} from "./theme-providers.tsx";

interface Props {
    children: React.ReactNode
}

export const Providers = ({children}: Props) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProviders>{children}</ThemeProviders>
        </PersistGate>
    </Provider>
)
import { Header } from "components/organisms";
import { FC, ReactNode } from "react";

export const MainLayout: FC<PropsType> = ({ children }) => {
    return (
        <div className='container'>
            <Header />
            {children}
        </div>
    );
};

interface PropsType {
    children?: ReactNode;
}

import { FC } from "react";

export const Dashboard: FC<PropsType> = ({ data }) => {
    return <div>Dashboard:FC</div>;
};

interface PropsType {
    data?: any;
}

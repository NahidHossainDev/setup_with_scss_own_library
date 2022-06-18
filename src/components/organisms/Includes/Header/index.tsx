import { FC } from "react";
import styles from "./Header.module.scss";

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <span>logo</span>
            <div className='ml-auto'>
                <button className='btn-primary br-xs'>User</button>
            </div>
        </div>
    );
};

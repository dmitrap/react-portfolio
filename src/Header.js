import React, {useState} from 'react';
import styles from './Header.module.css';
import NavMenu from "./NavMenu";
import {Slider} from 'react-burgers'


function Header() {
    let [editMode, setEditMode] = useState(false);

    const changeEditMode = () => {
        if (editMode === false) {
            setEditMode(true);
        }
        if (editMode === true) {
            setEditMode(false);
        }
    };
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                {editMode && <NavMenu/>}
                <Slider color='#ea548d'
                        active={editMode}
                        onClick={changeEditMode}
                        lineSpacing={6}
                        lineHeight={3}
                        width={30}/>
            </div>
        </div>

    );
}

export default Header;

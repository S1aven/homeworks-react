import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, initStateType} from "./bll/themeReducer";

function HW12() {

  const state = useSelector<AppStoreType, initStateType>(state => state.themes)
  const dispatch = useDispatch();

  const onChangeTheme = (option: string) => {
    dispatch(changeThemeAC(option))
  }

  return (
    <div className={`${s[state.selectedTheme]} wrapper`}>
      <hr/>
      <span className={s[state.selectedTheme + '-text']}>
                homeworks 12
            </span>
      <hr/>
      <SuperSelect
        options={state.themes}
        onChangeOption={onChangeTheme}
        value={state.selectedTheme}
      />

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr/>
    </div>
  );
}

export default HW12;

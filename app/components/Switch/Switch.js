import React, { useState } from "react";
import Switch from "react-switch";
const SwitchButton = (props) => {
  const [Checked, setChecked] = useState(true);
  const handleChangeSwitch = () => {
    setChecked((prev) => !prev);
    props.isChecked(!Checked);
  };
  const style = {
    wrapper: "flex items-center justify-end p-2 bg-bgDark",
    eng: `${Checked ? "text-white" : "text-purple"} mx-3`,
    ptBr: `${Checked ? "text-pink" : "text-white"} mx-3`,
  };
  return (
    <div className={style.wrapper}>
      <p className={style.eng}>ENG</p>
      <Switch
        onChange={handleChangeSwitch}
        checked={Checked}
        offColor="#A259FF"
        onColor="#EA4C89"
        uncheckedIcon={false}
        checkedIcon={false}
        activeBoxShadow="0"
      />
      <p className={style.ptBr}>pt-BR</p>
    </div>
  );
};

export default SwitchButton;

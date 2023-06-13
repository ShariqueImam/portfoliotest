import React, { useState } from "react";

const SwitchMob = (props) => {
  const [Checked, setChecked] = useState(true);
  const handleChangeSwitch = () => {
    setChecked((prev) => !prev);
    props.isChecked(!Checked);
  };

  return (
    <div className="flex items-center justify-center mx-auto">
      <h2 className="text-white text-sm">
        Would you like to switch to {Checked ? "English?" : "pt-BR"}
      </h2>
      <p className="text-yellow m-2" onClick={handleChangeSwitch}>
        YES
      </p>
    </div>
  );
};

export default SwitchMob;

import React, { useEffect } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { PanelMenu } from 'primereact/panelmenu';

const MainMenu = ({ data }) => {

  return (
    <div data-testid='main-menu'>
      <PanelMenu model={data} />
    </div>
  )
}

export default MainMenu;

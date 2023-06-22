import React, { ReactElement, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import './index.scss'
import { Menu } from "../../../../src"; //TODO how to import from happy-bee?
// import { Menu } from "happy-bee";
import { useSidebarData } from 'dumi';
import { useNavigate } from '@@/exports';
import { ISidebarItem } from 'dumi/dist/client/theme-api/types';
const Sidebar: React.FC = () => {
  const sidebarData = useSidebarData();
  const navigate = useNavigate();
  console.log('侧边栏data', sidebarData);

  const getSubMenu = (config: ISidebarItem[]) => {
    return config.map((item: ISidebarItem, ind: number) => {
      return {
        label: item.title,
        subLabel: item.frontmatter?.subtitle,
        key: item.order + item.title + ind,
        // subMenu: item,
        callback: () => {
          navigate(item.link)
        }
      }
    })
  };

  const items = sidebarData.map((item, ind) => {
    const childrenConfig = item.children || [];
    const firstChild = childrenConfig[0] as ISidebarItem;
    return {
      label: item.title,
      key: item.order + item.title + ind,
      subMenu: item.order === -1 ? null : getSubMenu(childrenConfig),
      callback: () => {
        navigate(firstChild.link)
      }
    }
  });

  return (
    <section className="main-menu-inner">
      <Menu
        items={items}
      />
    </section>
  )
};

export default Sidebar;
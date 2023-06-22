import './style/index.scss';
import { useEffect, useState } from 'react';

export interface ItemType {
  key: string,
  style?: React.CSSProperties;
  className?: string;
  danger?: boolean;
  icon?: React.ReactNode;
  title?: string;
  label?: JSX.Element,
  subLabel?: JSX.Element,
  subMenu?: ItemType[],
  callback?: (item: ItemType) => void
}

export interface MenuProps {
  items: ItemType[];
}

const InternalMenu = (props: MenuProps) => {
  const {
    items
  } = props;
  const [active, setActive] = useState(new Map());
  console.log('items', items);

  useEffect(() => {
    if (items.length) {
      const temp = new Map(active);
      const key = items[0]?.key;
      if (key) {
        temp.set(key, items[0]);
        setActive(temp)
      }
    }
  }, [])

  const handleClick = (item: ItemType) => {
    const { callback } = item;
    if (item.subMenu) {
      return;
    }
    callback && callback(item);
    const temp = new Map(active);
    temp.clear();
    temp.set(item.key, item);
    // if (temp.has(item.key)) {
    //   temp.delete(item.key);
    // } else {
    //   temp.set(item.key, item);
    // }
    setActive(temp);
  }

  const calcStyle = (item: ItemType) => {
    let style = 'menu-li';
    if (active.has(item.key)) {
      style += ' active'
    }
    if (item.subMenu) {
      style += ' group-menu'
    }
    return style;
  };

  const renderSubMenu = (config: ItemType[]) => {
    return <ul className='happy-bee-menu-ul ul-group-menu'>
      {render(config)}
    </ul>
  }

  const renderMenuLabel = (item: ItemType) => {
    if (item.subLabel) {
      return (
        <>
          <span>{item.label}</span>
          <span>{item.subLabel}</span>
        </>
      )
    }
    return item.label;
  }

  const render = (config: ItemType[]) => {
    return config.map((item, ind) => {
      return (
        <li
          key={item.key || ind}
          className={calcStyle(item)}
          onClick={() => handleClick(item)}
        >
          <div className='menu-label'>
            {renderMenuLabel(item)}
          </div>
          {item.subMenu ? renderSubMenu(item.subMenu) : ''}
        </li>
      )
    })
  }

  return <div className="happy-bee-menu">
    <ul className='happy-bee-menu-ul default-menu-ul'>{render(items)}</ul>
  </div>
}

const Menu = InternalMenu;

export default Menu;
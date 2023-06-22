import Link from '../../common/Link';
import { Menu } from "../../../../src"; //TODO how to import from happy-bee?
// import { Menu } from "happy-bee";

const locales = {
  cn: {
    design: '设计',
    development: '研发',
    components: '组件',
    resources: '资源',
    blog: '博客',
  }
}

const InternalNavigation = (props) => {

  const {

  } = props;
  const locale = locales.cn;

  const items = [
    {
      label: (
        <Link to='/components'>
          {locale.components}
        </Link>
      ),
      key: 'components',
    },
  ]

  return (
    <Menu
      items={items}
    />
  )
}

const Navigation = InternalNavigation;

export default Navigation
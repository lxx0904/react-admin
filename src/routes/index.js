import {
    HomeOutlined,
    AppstoreOutlined,
    PartitionOutlined,
    // FormOutlined,
    // FundViewOutlined,
    // MenuOutlined,
    // GatewayOutlined,
    // UserOutlined
} from '@ant-design/icons';
import Loadable from '../utils/loadable'

// 首页
const Index = Loadable(() => import(/* webpackChunkName: 'index' */ '../views/Index/Index'))

// 通用
const ButtonView = Loadable(() => import(/* webpackChunkName: 'button' */ '../views/PublicView/Button'))
const IconView = Loadable(() => import(/* webpackChunkName: 'icon' */ '../views/PublicView/Icon'))

// 导航
const DropdownView = Loadable(() => import(/* webpackChunkName: 'dropdown' */ '../views/NavView/Dropdown'))
const MenuView = Loadable(() => import(/* webpackChunkName: 'menu' */ '../views/NavView/Menu'))
const StepView = Loadable(() => import(/* webpackChunkName: 'step' */ '../views/NavView/Step'))

const routes = [
    {
        title: '首页',
        key: '/index',
        icon: HomeOutlined,
        // auth: [1],
        component: Index
    },
    {
        title: '通用',
        key: '/public',
        icon: AppstoreOutlined,
        // auth: [1],
        children: [
            {
                title: '按钮',
                key: '/public/button',
                icon: '',
                component: ButtonView
            },
            {
                title: '图标',
                key: '/public/icon',
                icon: '',
                component: IconView
            },
        ]
    },
    {
        title: '导航',
        key: '/nav',
        icon: PartitionOutlined,
        children: [
            { title: '下拉菜单', key: '/nav/dropdown', icon: '', component: DropdownView },
            { title: '导航菜单', key: '/nav/menu', icon: '', component: MenuView },
            { title: '步骤条', key: '/nav/steps', icon: '', component: StepView }
        ]
    },
    // {
    //     title: '表单',
    //     key: '/form',
    //     icon: FormOutlined,
    //     children: [
    //         { title: '基础表单', key: '/form/base-form', icon: '' },
    //         { title: '步骤表单', key: '/form/step-form', icon: '' }
    //     ]
    // },
    // {
    //     title: '展示',
    //     key: '/show',
    //     icon: FundViewOutlined,
    //     children: [
    //         { title: '表格', key: '/show/table', icon: '' },
    //         { title: '折叠面板', key: '/show/collapse', icon: '' },
    //         { title: '树形控件', key: '/show/tree', icon: '' },
    //         { title: '标签页', key: '/show/tabs', icon: '' }
    //     ]
    // },
    // {
    //     title: '其它',
    //     key: '/others',
    //     icon: MenuOutlined,
    //     auth: [1],
    //     children: [
    //         { title: '进度条', key: '/others/progress', icon: '' },
    //         { title: '动画', key: '/others/animation', icon: '' },
    //         { title: '上传', key: '/others/upload', icon: '' },
    //         { title: '富文本', key: '/others/editor', icon: '' },
    //         { title: '404', key: '/404', icon: '' },
    //         { title: '500', key: '/500', icon: '' }
    //     ]
    // },
    // {
    //     title: '多级导航',
    //     key: '/one',
    //     icon: GatewayOutlined,
    //     children: [
    //         {
    //             title: '二级',
    //             key: '/one/two',
    //             icon: '',
    //             children: [{ title: '三级', key: '/one/two/three', icon: '' }]
    //         }
    //     ]
    // },
    // {
    //     title: '关于',
    //     key: '/about',
    //     icon: UserOutlined,
    //     auth: [1]
    // }
]

export default routes
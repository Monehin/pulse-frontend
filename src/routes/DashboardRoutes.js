import Programs from '../pages/dashboard/Program/Programs';
import Users from '../pages/dashboard/User/Users';
import Partners from '../pages/dashboard/Partner/Partners';
import {
  CarryOutOutlined,
  PartitionOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const DashboardRoutes = [
  {
    id: 1,
    name: 'Programs',
    url: '/programs',
    icon: <PartitionOutlined />,
    component: <Programs />,
  },
  {
    id: 2,
    name: 'Users',
    url: '/users',
    icon: <TeamOutlined />,
    component: <Users />,
  },
  {
    id: 3,
    name: 'Partners',
    url: '/partners',
    icon: <CarryOutOutlined />,
    component: <Partners />,
  },
];

export default DashboardRoutes;

// import Example from './Example';
import MainApp from './MainApp';
import LeapApp from './LeapApp';
import LcapApp from './LcapApp';
import RiskApp from './RiskApp';
import BenchmarkApp from './BenchmarkApp';
import MaintenancePage from '../pages/maintenance/MaintenancePage';
import SearchPage from '../pages/search/SearchPage';
import FaqPage from '../pages/faq/FaqPage';
import KnowledgeBasePage from '../pages/knowledge-base/KnowledgeBasePage';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/main',
            component: MainApp
        },
        {
            path     : '/leap',
            component: LeapApp
        },
        {
            path     : '/lcap',
            component: LcapApp
        },
        {
            path     : '/risk',
            component: RiskApp
        },
        {
            path     : '/benchmark',
            component: BenchmarkApp
        },
        {
            path     : '/maintenance',
            component: MaintenancePage
        },
        {
            path     : '/search',
            component: SearchPage
        },
        {
            path     : '/faq',
            component: FaqPage
        },
        {
            path     : '/knowledge',
            component: KnowledgeBasePage
        }
    ]
};

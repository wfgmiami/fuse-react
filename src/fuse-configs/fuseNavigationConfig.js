export const fuseNavigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component-1',
                'title': 'LEAP',
                'type' : 'item',
                'icon' : 'show_chart',
                'url'  : '/leap'
            },
            {
                'id'   : 'example-component-2',
                'title': 'LCAP',
                'type' : 'item',
                'icon' : 'transform',
                'url'  : '/lcap'
            },
            {
                'id'   : 'example-component-3',
                'title': 'Risk Reports',
                'type' : 'item',
                'icon' : 'filter',
                'url'  : '/risk'
            },
            {
                'id'   : 'example-component-4',
                'title': 'Index Comparison',
                'type' : 'item',
                'icon' : 'compare_arrows',
                'url'  : '/benchmark'
            }
        ]
    },
    {
        'id'      : 'pages',
        'title'   : 'Pages',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component-11',
                'title': 'Maintenance',
                'type' : 'item',
                'icon' : 'build',
                'url'  : '/maintenance'
            },
            {
                'id'   : 'example-component-12',
                'title': 'Knowledge Base',
                'type' : 'item',
                'icon' : 'import_contacts',
                'url'  : '/knowledge'
            },
            ,
            {
                'id'   : 'example-component-13',
                'title': 'Faq',
                'type' : 'item',
                'icon' : 'live_help',
                'url'  : '/faq'
            },
            {
                'id'   : 'example-component-14',
                'title': 'Search',
                'type' : 'item',
                'icon' : 'search',
                'url'  : '/search'
            }
        ]
    }
];
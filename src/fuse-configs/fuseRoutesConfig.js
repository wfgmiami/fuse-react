import React from 'react';
import {Redirect} from 'react-router-dom';
// import {FuseUtils} from '@fuse/index';
import FuseUtils from '@fuse/FuseUtils';
import {ExampleConfig} from 'main/content/example/ExampleConfig';

const routeConfigs = [
    ExampleConfig

];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/main"/>
    }
];

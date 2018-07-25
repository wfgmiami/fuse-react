import 'babel-polyfill'
import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import './react-table-defaults';
import './styles/index.css';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import {createGenerateClassName, jssPreset} from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import store from 'store';
import jssExtend from 'jss-extend'
import {routes} from './fuse-configs/fuseRoutesConfig';
// import {FuseLayout, FuseTheme, FuseAuthorization} from '@fuse';
import FuseTheme from '@fuse/components/FuseTheme/FuseTheme';
import FuseLayout from '@fuse/components/FuseLayout/FuseLayout.js';

import MainToolbar from './main/MainToolbar';
import MainNavbarContent from './main/MainNavbarContent';
import MainNavbarHeader from './main/MainNavbarHeader';
import MainFooter from './main/MainFooter';
import QuickPanel from 'main/quickPanel/QuickPanel';
import SettingsPanel from 'main/SettingsPanel';

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();
ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
            <Router history={history}>
                <FuseTheme>
                    <FuseLayout
                        routes={routes}
                        toolbar={
                            <MainToolbar/>
                        }
                        navbarHeader={
                            <MainNavbarHeader/>
                        }
                        navbarContent={
                            <MainNavbarContent/>
                        }
                        footer={
                            <MainFooter/>
                        }
                    />
                    <SettingsPanel/>
                    <QuickPanel/>
                </FuseTheme>
            </Router>
        </Provider>
    </JssProvider>
    , document.getElementById('root'));

registerServiceWorker();

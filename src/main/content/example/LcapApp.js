import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
// import {FusePageSimple, LcapContent} from '@fuse';
import FusePageSimple from '@fuse/components/FusePageLayouts/FusePageSimple.js';
import LcapContent from '@fuse/components/LcapContent';

const styles = theme => ({
    layoutRoot: {}
});

class LcapApp extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                // header={
                //     <div className="p-24"><h4>Header</h4></div>
                // }
                // contentToolbar={
                //     <div className="px-24"><h4>Content Toolbar</h4></div>
                // }
                content={
                    <div className="p-24">
                        {/* <h4>Content</h4> */}
                        <br/>
                        <LcapContent/>
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(LcapApp);
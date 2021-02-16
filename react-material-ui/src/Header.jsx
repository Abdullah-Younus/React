import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';



const Header = () => {
    return (
        <>
            <header>
                <Grid container >
                    <Grid item xs={12} >
                        <Paper className="header-grid-style"><h1>Keep Note</h1></Paper>
                    </Grid>
                </Grid>
            </header>
        </>
    );
}

export default Header;
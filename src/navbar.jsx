/* eslint-disable react/prop-types */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BusAlert from '@mui/icons-material/BusAlert';

export default function Navbar( {onBic, onCommuter, onHatfield, onLakeNorth, onLakeSouth, onPerc, onSpeed, onSrc, onTriplets} ) {

  return (
    <AppBar position="static" color="primary">
        <Toolbar disableGutters>
          <BusAlert sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CAMPUS_PARKING
          </Typography>
          <IconButton
            color="inherit"
            aria-label="edit"
            onClick={onBic}
          >
            Bic
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="delete"
            onClick={onCommuter}
          >
            Commuter
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="edit"
            onClick={onHatfield}
          >
            Hatfield
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="edit"
            onClick={onLakeNorth}
          >
            Lakeside North
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="edit"
            onClick={onLakeSouth}
          >
            Lakeside South
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="edit"
            onClick={onPerc}
          >
            Percopo
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="edit"
            onClick={onSpeed}
          >
            Speed
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="edit"
            onClick={onSrc}
          >
            SRC
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="edit"
            onClick={onTriplets}
          >
            Triplets
          </IconButton>
        </Toolbar>
    </AppBar>
  );
}
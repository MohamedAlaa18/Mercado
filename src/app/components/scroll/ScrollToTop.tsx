import { KeyboardArrowUp } from "@mui/icons-material"
import { Fab, Zoom, useScrollTrigger } from "@mui/material"

function ScrollToTop() {
    // const scroll = useScrollTrigger(false);
    // const handleClick
    return (
        <Zoom in={useScrollTrigger({ threshold: 100 })}>
            <Fab sx={{ position: "fixed", bottom: 33, right: 33 }}
                size="small" variant="extended" color="primary" aria-label="add"
                onClick={() => scrollTo(0, 0)}>
                <KeyboardArrowUp />
            </Fab>
        </Zoom>
    )
}

export default ScrollToTop
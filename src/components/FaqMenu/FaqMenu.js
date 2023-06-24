import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./FaqMenu.css";

export default function FaqMenu() {
    return (
        <div className='faq-menu'>
            <p className='faq-heading'>FAQs</p>
            <div className='accordian-items'>
                <Accordion className='accordian-row'>
                    <AccordionSummary
                        className='accordian-summary'
                        expandIcon={<ExpandMoreIcon className='accordian-icon' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Is Qtify free to use?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordian-details'>
                        <Typography>
                            Yes! It is 100% free, and has 0% ads!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordian-row'>
                    <AccordionSummary
                        className='accordian-summary'
                        expandIcon={<ExpandMoreIcon className='accordian-icon' />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Can I download and listen to songs offline?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordian-details'>
                        <Typography>
                            Sorry, unfortunately we don't provide the service to download any songs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
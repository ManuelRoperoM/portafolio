import Icon from '@mdi/react';
import { mdiCardAccountMailOutline } from '@mdi/js';
import { mdiCloseCircleOutline } from '@mdi/js';
import { mdiPhoneClassic } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
export function ModalContact({windowContact, hideContact}) {
    if (!windowContact) return null
    return(
    <div className="window__contact">
        <div className='content'>
            <div className='close-button'>
                <button onClick={hideContact}><Icon path={mdiCloseCircleOutline} size={1.5} /></button>
            </div>
            <div className='title'>
                <Icon path={mdiCardAccountMailOutline} size={1} />
                <h1>Contactame</h1>
            </div>
            <div className='contact-info'>
                <ul>
                    <li><Icon path={mdiPhoneClassic} size={1} /> <p>(+57)</p>319 489 3065</li>
                    <li><Icon path={mdiEmail} size={1} /> mnlrpr@gmail.com</li>
                    <li><a href="https://www.linkedin.com/in/manuel-alejandro-ropero-mosquera-044681152/" target="_blank" rel="noopener noreferrer"><Icon path={mdiLinkedin} size={1} /> linkedin</a></li>
                    <li> <a href="https://github.com/ManuelRoperoM" target="_blank" rel="noopener noreferrer"><Icon path={mdiGithub} size={1} /> gitHub</a></li>
                </ul>
            </div>
        </div>
    </div>)
}
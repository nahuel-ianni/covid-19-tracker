import React, { Fragment, useState } from 'react';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

const SocialMediaPanel = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const shareUrl = window.location.href;
    const content = `In the past 24 hours, the ${props.title.toLowerCase()} cases increased by ${props.increase}%\n${props.cases.toLocaleString()} cases reported so far.\n\nSource:`;
    const emailSubject = `Covid-19 stats - ${shareUrl}`;

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Fragment>
            <IconButton onClick={handleClick}>
                <ShareIcon />
            </IconButton>

            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                    <FacebookShareButton url={shareUrl} quote={content}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <TwitterShareButton url={shareUrl} title={content}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <EmailShareButton url={shareUrl} subject={emailSubject} body={content}>
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </MenuItem>
            </Menu>
        </Fragment>
    )
}

export default SocialMediaPanel;
/*
 * Copyright (C) 2015  Ben Ockmore
 *               2015  Sean Burke
 * 				 2024  Meziyum
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';


/**
 * Renders a LoadingSpinner Component displaying a spinning loading icon.
 * @returns {JSX.Element} The JSX content of the LoadingSpinner indicator
 */
function LoadingSpinner(): JSX.Element {
	return (
		<div className="loading-background">
			<FontAwesomeIcon
				spin
				className="loading-spinner"
				icon={faCircleNotch}
				size="2x"
			/>
		</div>
	);
}

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;

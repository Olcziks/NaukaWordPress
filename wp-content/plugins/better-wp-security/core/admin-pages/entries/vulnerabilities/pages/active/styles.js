import styled from '@emotion/styled';
import { Filters, Surface, Text } from '@ithemes/ui';
import { Icon } from '@wordpress/components';

export const StyledTableSection = styled( Surface )`
	flex-shrink: 1;
	position: relative;
`;

export const StyledRow = styled.tr`
	vertical-align: ${ ( { isSmall, isLarge } ) => ( ! isSmall && ! isLarge ) && 'top' };
`;

export const StyledVulnerabilityName = styled( Text )`
	grid-area: name;
`;

export const StyledVulnerabilityVersion = styled( Text )`
	grid-area: version
`;

export const StyledVulnerabilityDetail = styled( Text )`
	grid-area: detail;
`;

export const StyledCombinedColumns = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 1fr;
	grid-template-areas: "severity name";
	justify-items: start;
`;

export const StyledVulnerability = styled( Surface )`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: "name" "version" "detail";
	align-items: center;
	@media screen and (min-width: 960px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas: "name version detail"  
	}
`;

export const StyledSeverity = styled( Text )`
	display: flex;
	justify-content: center;
	width: min-content;
	min-width: 2rem;
	margin: ${ ( { isSmall } ) => ! isSmall && '0 auto' };
	padding: 1.5px 6.5px;
	background-color: ${ ( { backgroundColor } ) => backgroundColor };
	border-radius: 2px;
`;

export const StyledStatusCheck = styled( Icon )`
	background-color: #438C56;
	border-radius: 2rem;
`;

export const StyledStatusRedCircle = styled( Icon )`
	background-color: #FFABAF;
	border-radius: 2rem;
`;

export const StyledFilters = styled( Filters )`
	width: 350px;
`;

export const StyledFilterTools = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const StyledSearchDivider = styled.span`
	color: #c0c0c0;
`;

export const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: ${ ( { isSmall } ) => isSmall && 'column' };
	gap: 1rem;
`;

export const StyledPagination = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: flex-end;
	& .components-button.is-tertiary:disabled {
		background: transparent !important;
	}
`;

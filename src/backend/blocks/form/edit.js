/**
 * Wordpress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { colord } from 'colord';

/**
 * Internal dependencies
 */
import Inspector from './inspector.js';

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = ( props ) => {
	const {
		attributes: { buttonTitle },
		setAttributes,
		buttonColor,
		postType,
	} = props;

	const blockProps = useBlockProps( {
		className: [ 'ctx-event-booking' ].filter( Boolean ).join( ' ' ),
	} );

	const textColor =
		buttonColor.color == undefined || colord( buttonColor.color ).isLight()
			? '#000000'
			: '#ffffff';

	const style = {
		background: buttonColor.color,
		color: textColor,
	};

	console.log( postType );

	return (
		<>
			{ postType !== 'gbf-form' ? (
				<p>
					{ __(
						'Only available on Forms Post Type',
						'gutenberg-form'
					) }
				</p>
			) : (
				<div { ...blockProps }>
					<Inspector { ...props } />
					<span style={ style } className="events ctx-button">
						<RichText
							tagName="span"
							value={ buttonTitle }
							onChange={ ( value ) =>
								setAttributes( { buttonTitle: value } )
							}
							placeholder={ __( 'Registration', 'events' ) }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
						/>
					</span>
				</div>
			) }
		</>
	);
};

export default edit;

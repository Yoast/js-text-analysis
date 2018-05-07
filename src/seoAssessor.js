var Assessor = require( "./assessor.js" );

var introductionKeyword = require( "./assessments/seo/introductionKeywordAssessment.js" );
var KeyphraseLength = require( "./assessments/seo/keyphraseLengthAssessment.js" );
var KeywordDensity = require( "./assessments/seo/keywordDensityAssessment.js" );
var MetaDescriptionKeyword = require( "./assessments/seo/metaDescriptionKeywordAssessment.js" );
var MetaDescriptionLength = require( "./assessments/seo/metaDescriptionLengthAssessment.js" );
var SubheadingsKeyword = require( "./assessments/seo/subheadingsKeywordAssessment.js" );
var textCompetingLinks = require( "./assessments/seo/textCompetingLinksAssessment.js" );
var TextImages = require( "./assessments/seo/textImagesAssessment.js" );
var TextLength = require( "./assessments/seo/textLengthAssessment.js" );
var OutboundLinks = require( "./assessments/seo/outboundLinksAssessment.js" );
var internalLinks = require( "./assessments/seo/internalLinksAssessment" );
var TitleKeyword = require( "./assessments/seo/titleKeywordAssessment.js" );
var TitleWidth = require( "./assessments/seo/pageTitleWidthAssessment.js" );
var UrlKeyword = require( "./assessments/seo/urlKeywordAssessment.js" );
/**
 * Creates the Assessor
 *
 * @param {object} i18n The i18n object used for translations.
 * @param {Object} options The options for this assessor.
 * @param {Object} options.marker The marker to pass the list of marks to.
 *
 * @constructor
 */
var SEOAssessor = function( i18n, options ) {
	Assessor.call( this, i18n, options );

	this._assessments = [
		introductionKeyword,
		new KeyphraseLength(),
		new KeywordDensity(),
		new MetaDescriptionKeyword(),
		new MetaDescriptionLength(),
		new SubheadingsKeyword(),
		textCompetingLinks,
		new TextImages(),
		new TextLength(),
		new OutboundLinks(),
		internalLinks,
		new TitleKeyword(),
		new TitleWidth(),
		new UrlKeyword(),
	];
};

require( "util" ).inherits( SEOAssessor, Assessor );

module.exports = SEOAssessor;

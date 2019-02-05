/**
 * Analyzes a paper by doing a list of assessments on a tree representation of a text and its metadata.
 * Aggregates the scores on each individual assessment into an overall score.
 *
 * This score can represent anything from the readability to the SEO of the given text and metadata.
 */
class TreeAssessor {
	/**
	 * Creates a new assessor.
	 *
	 * @param {Object} options                                         Assessor options.
	 * @param {Jed} options.i18n                                       A Jed object to use for translations.
	 * @param {module:tree/research.TreeResearcher} options.researcher Supplies the assessments with researches and their (cached) results.
	 * @param {Object} options.scoreAggregator                         Aggregates the scores on the individual assessments into one overall score.
	 * @param {Object[]} [options.assessments]                         The list of assessments to do.
	 */
	constructor( options ) {
		this.i18n = options.i18n;
		this.researcher = options.researcher;
		this.scoreAggregator = options.scoreAggregator;
		this.assessments = options.assessments || [];
	}

	/**
	 * Returns the list of available assessments.
	 *
	 * @returns {Object[]|Array|*} The list of all available assessments.
	 */
	getAvailableAssessments() {
		return this.assessments;
	}

	/**
	 * Checks whether the given assessment is applicable to the given paper.
	 *
	 * @param {Object} assessment The assessment to check whether it is applicable.
	 * @param {Paper} paper       The paper to check.
	 *
	 * @returns {Promise<Boolean>} Whether the assessment is applicable (wrapped in a promise)
	 */
	async isApplicable( assessment, paper ) {
		return assessment.isApplicable( paper, this.researcher );
	}
}

export default TreeAssessor;
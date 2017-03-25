import jira from '../services/jira';

export const description = 'Get the current user';

export const action = (args, options, logger) => {
	jira
		.getCurrentUser()
		.then(logger.info)
		.catch(logger.error);
};

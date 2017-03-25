import * as JiraApi from 'jira-client';
import * as keytar from 'keytar';

const jira = new JiraApi({
	protocol: 'https',
	host: 'scrippsnetworks.atlassian.net',
	apiVersion: '2',
	strictSSL: true
});

export default jira;

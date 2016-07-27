import {Resource} from '../../src';
import {receiveJson, sendJson} from '../../src/format';

export default class CommentResource extends receiveJson(sendJson(Resource)) {
	constructor() {
		super({
			service: 'json-placeholder',
			name: 'comments',
			identifierName: 'id'
		});
	}
}


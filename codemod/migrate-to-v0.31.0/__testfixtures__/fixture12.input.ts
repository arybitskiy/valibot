import * as v from 'valibot';

const Schema = v.brand(v.pipe(v.string(), v.url()), 'foo');

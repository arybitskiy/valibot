import * as v from 'valibot';

const Schema = v.pipe(v.string(), v.toTrimmed(), v.url());

import * as v from 'valibot';

const Schema = v.object({ name: v.string(), age: v.number() }, [
  v.pipe(
    v.custom((i) => i.age > 18, 'You must be over 18'),
    v.forward(['age'])
  ),
]);

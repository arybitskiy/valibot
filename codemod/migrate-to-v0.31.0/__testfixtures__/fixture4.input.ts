import * as v from 'valibot';
import { object, tuple, tupleWithRest, objectWithRest } from "valibot"

const ObjectSchema = objectWithRest({ key: v.string() }, v.null_());
const TupleSchema = tupleWithRest([v.string()], v.null_());

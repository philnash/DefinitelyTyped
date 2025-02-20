import memoryCache = require('memory-cache');

const key: any = 'sampleKey';
let value: string;
const bool = false;
let num: number;
let returnedValue: string;

returnedValue = memoryCache.put(key, value);
returnedValue = memoryCache.put(key, value, num);
returnedValue = memoryCache.put(key, value, num, key => { });
returnedValue = memoryCache.put(key, value, num, (key, value) => { });

let wasDeleted = memoryCache.del(key);
value = memoryCache.get(key);
wasDeleted = memoryCache.del(key);
memoryCache.clear();

num = memoryCache.size();
num = memoryCache.memsize();

memoryCache.debug(bool);
num = memoryCache.hits();
num = memoryCache.misses();

const customCache = new memoryCache.Cache<string, boolean>();

const customKey = 'customKey';
let customValue: boolean;
let customKeys: string[];

customValue = customCache.put(customKey, customValue);
customCache.get(customKey);
customCache.del(customKey);
customKeys = customCache.keys();

memoryCache.importJson('{}');
memoryCache.importJson('{}', { skipDuplicates: true });
memoryCache.exportJson(); // $ExpectType string

customCache.importJson('{}');
customCache.importJson('{}', { skipDuplicates: true });
customCache.exportJson(); // $ExpectType string

'use strict';

import app from '../src';
import {connectDatabase} from '../src/db';
import {config} from '../src/db/config';
const port = process.env.PORT || 5858;

(async() => {
    try {
        const info = await connectDatabase(config.development);
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    } catch (error) {
        console.error('Unable to connect to database');
    }

    try {
        await app.listen(port);
        console.log(`Server started on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})();
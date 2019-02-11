import HapiSwagger from 'hapi-swagger';
import Inert from 'inert';
import Vision from 'vision';

const name = 'swagger';
const logger = require('../../util/logger')({ name: `plugin:${name}` });

module.exports = {
    name,
    async register(server, options) {

        // We added in HapiSwaggerUI because HapiSwagger hadn't been updated and had an SSL bug.
        const swaggerUIOptions = {
            name: 'Articulate API Documentation',
            title: 'Articulate API Documentation',
            path: '/documentation',
            swaggerOptions: {
                validatorUrl: false
            },
            authorization: false,
            schemes: options.schemes,
            host: options.host
        };
        swaggerUIOptions.basePath = options.basePath ? options.basePath : null;
        await server.register([
            Inert,
            Vision,
            {
                plugin: HapiSwagger,
                options
            },
            {
                plugin: require('hapi-swaggered-ui'),
                options: {
                    title: 'Example API2',
                    path: '/documentation',
                    swaggerEndpoint: '/swagger.json',
                    swaggerOptions: {
                        validatorUrl: null
                    }
                }
            }
        ]);
        logger.info('registered');
    }
};

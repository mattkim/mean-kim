'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/seedly'
  },

  // S3 credentials
  s3: {
    access: process.env.AWS_ACCESS_KEY ||
            'noaccesskey',
    secret: process.env.AWS_SECRET_KEY ||
            'nosecretkey',
    bucket: 'seedlyfoods'
  },

  // Stripe credentials
  stripe: {
    sk: process.env.STRIPE_SK ||
        'nosk',
    pk: process.env.STRIPE_PK ||
        'nopk'
  }

};